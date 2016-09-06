const Client = require('node-rest-client').Client;
const http = require('http-debug').http;
const turf = require('turf');
const parse = require('wellknown');
const _ = require('lodash');
//http.debug = 2;

class NVDBClient {

    constructor(options) {
        this.apiBase = 'https://www.vegvesen.no/nvdb/api/v2';
        this.args = {
            requestConfig: {
                timeout: 1000,
                noDelay: true,
                keepAlive: true
            },
            responseConfig: {
                timeout: 1000 //response timeout 
            },
            connection: {
                headers: {
                    "Accept": "application/vnd.vegvesen.nvdb-v2+json"
                },
            }
        };
        this.client = new Client(this.args);
    }



    connect(callback) {
        this.client.get(this.apiBase, function(data, response) {
            // parsed response body as js object
            let endpoints = JSON.parse(data);

            endpoints.forEach(function(endpoint) {
                this.client.registerMethod(endpoint.navn, endpoint.href + '/${type}/${id}', "GET");
            }.bind(this));
            callback();
        }.bind(this));
    }

    createGeoJson(data) {
        let features = [];

        data.objekter.forEach(function(obj) {


            if (obj.geometri) {
                let geom = parse(obj.geometri.wkt);

                //NVDB delivers wgs84 coords in lat,lng and not lng,lat, so we have to
                //swap them around to respond with correct geojson structure.
                //altitudes are skipped.
                let newcoords;
                if (geom.type == 'Point') {
                    newcoords = [geom.coordinates[1], geom.coordinates[0]];
                } else {
                    newcoords = _.map(geom.coordinates, function(coord) {
                        return [coord[1], coord[0]];
                    });
                }

                geom.coordinates = newcoords;
                let properties = _.map(obj.egenskaper, function(egenskap) {
                    return _.pick(egenskap, ['navn', 'verdi']);
                });
                let feature = turf.feature(geom, properties)
                features.push(feature);
            } else {

            }

        });

        let fc = turf.featureCollection(features);

        return fc;
    }

    fetch(method, args, callback) {
        this.client.methods[method](args, function(data, response) {
            let resp = JSON.parse(data);
            let geojson = this.createGeoJson(resp);
            callback(geojson);
        }.bind(this));
    }
}

module.exports = NVDBClient;

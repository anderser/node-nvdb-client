# node-nvdb-client

> Access the NVDB API v2 and return results as GeoJSON

Work in progress. Use at own risk.

## Install

```
$ npm install --save node-nvdb-client
```


## Usage

See NVDB API Docs for examples: https://www.vegvesen.no/nvdb/apidokumentasjon/#/

```js
var NVDBClient = require('node-nvdb-client')

var nvdb = NVDBClient();

nvdb.connect(function() {
    nvdb.fetch('Vegobjekter',{
            path: {
                type: 67, //tunnelløp
                id: '' // må være tom dersom ikke spesifit vegobjekt skal hentes
            },
            parameters: {
                antall: 10000,
                inkluder: 'geometri,egenskaper',
                srid: 4326,
                vegreferanse: 'Ev16',
                kartutsnitt: '5.464603900909424,60.41706227453995,6.400566101074218,60.658040943395704'
                //overlapp: '532(4568=16)'
            }
        },
        function(data, response) {
            // data contains GeoJson structured data returned from NVDB API
            console.log(JSON.stringify(data));

        });
});

```


Returns geojson string which can be sendt to a file. `node myscript.js > mydata.geojson`

Egenskaper in NVDB response are parsed into key value properties. (only `navn` and `verdi`) are used as of now.

## TODO

Error handling, tests, pagination and a lot more.

## License

MIT © [Anders Eriksen](http://bt.no)

All data returned from NVDB API uses ["Norsk lisens for offentlige data"](http://data.norge.no/nlod/no/1.0)

'use strict';
var NVDBClient = require('./lib/client');

module.exports = () => {

    var nvdb = new NVDBClient();
    return nvdb;
};

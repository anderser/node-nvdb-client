#!/usr/bin/env node

'use strict';
const meow = require('meow');
const nodeNvdbClient = require('./');

const cli = meow(`
	Usage
	  $ node-nvdb-client [endpoint] [jsonparams]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ node-nvdb-client
	  unicorns & rainbows
	  $ node-nvdb-client ponies
	  ponies & rainbows
`);

var nvdb = nodeNvdbClient();

nvdb.connect(function() {
    let endpoint = cli.input[0];
    let options = JSON.parse(cli.input[1]+'');
    console.log(endpoint);
    console.log(options);

    nvdb.fetch(endpoint, options,
        function(data, response) {
            // parsed response body as js object
            console.log(JSON.stringify(data));

        });
});

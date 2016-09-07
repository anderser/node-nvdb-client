# node-nvdb-client [![Build Status](https://travis-ci.org/BergensTidende/node-nvdb-client.svg?branch=master)](https://travis-ci.org/BergensTidende/node-nvdb-client)

> Access the NVDB API v2


## Install

```
$ npm install --save node-nvdb-client
```


## Usage

```js
var NVDBClient = require('node-nvdb-client')

var nvdb = NVDBClient();

nvdb.connect(function() {
    nvdb.fetch('Vegobjekter',{
            path: {
                type: 67,
                id: ''
            },
            parameters: {
                antall: 10000,
                inkluder: 'geometri',
                srid: 4326,
                vegreferanse: 'Ev16',
                kartutsnitt: '5.464603900909424,60.41706227453995,6.400566101074218,60.658040943395704'
                //overlapp: '532(4568=16)'
            }
        },
        function(data, response) {
            // parsed response body as js object
            console.log(JSON.stringify(data));

        });
});

```


Returns geojson string which can be sendt to a file. `node myscript.js > mydata.geojson`

## API

### nodeNvdbClient(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global node-nvdb-client
```

```
$ node-nvdb-client --help

  Usage
    node-nvdb-client [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ node-nvdb-client
    unicorns & rainbows
    $ node-nvdb-client ponies
    ponies & rainbows
```


## License

MIT © [Anders Eriksen](http://bt.no)

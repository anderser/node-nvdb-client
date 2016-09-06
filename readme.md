# node-nvdb-client [![Build Status](https://travis-ci.org/BergensTidende/node-nvdb-client.svg?branch=master)](https://travis-ci.org/BergensTidende/node-nvdb-client)

> Access the NVDB API v2


## Install

```
$ npm install --save node-nvdb-client
```


## Usage

```js
const nodeNvdbClient = require('node-nvdb-client');

nodeNvdbClient('unicorns');
//=> 'unicorns & rainbows'
```


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

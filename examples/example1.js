var vegvesen = require('../')

var nvdb = vegvesen('gfgd');

nvdb.connect(function() {
    nvdb.fetch('Vegobjekter',{
            path: {
                type: 570,
                id: ''
            },
            parameters: {
            	antall: 10,
            	inkluder: 'alle',
            	srid: 4326,
            	//overlapp: '532(4568=16)'
            }
        },
        function(data, response) {
            // parsed response body as js object
            console.log(JSON.stringify(data));

        });
});

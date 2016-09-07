var vegvesen = require('../')

var nvdb = vegvesen('gfgd');

nvdb.connect(function() {
    nvdb.fetch('Vegobjekter',{
            path: {
                type: 570,
                id: ''
            },
            parameters: {
            	antall: 10000,
            	inkluder: 'egenskaper,geometri',
            	srid: 4326,
                vegreferanse: 'Ev16',
                kartutsnitt: '5.464603900909424,60.41706227453995,6.400566101074218,60.658040943395704',
                egenskap: "5055>'2006-01-01'",
            }
        },
        function(data, response) {
            // parsed response body as js object
            console.log(JSON.stringify(data));

        });
});

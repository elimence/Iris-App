
/*
 * GET home page.
 */

 var https = require('https');
var querystring = require('querystring');

exports.start_sequence = function(req, res){
	// res.render('index');
	console.log( 'starting' );
	console.log( req.body );
	var number = req.body.phone;

    res.statusCode = 200;
    res.end();


	var options = {
        hostname: 'go.votomobile.org',
        path: '/api/v1/subscribers' + '?' + querystring.stringify({
          api_key: '2abebbcafbf90b4eb0471411a',
          phone: number,
        }),
        port: 443,
        method: 'POST'
    }

    // createSubscriber
    var request = https.request(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');

        response.on( 'data', function( data ){
        	console.log( 'data : ', data );
        });

    });

    request.on( 'error', function( e ){
    	console.log( 'error : ', e.message );
    });

    request.end();

    // create an outgoing call
    var options = {
        hostname: 'go.votomobile.org',
        path: '/api/v1/outgoing_calls' + '?' + querystring.stringify({
          api_key: '2abebbcafbf90b4eb0471411a',
          survey_id: "201120",
        }),
        port: 443,
        method: 'POST'
    }

    // createSubscriber
    var request = https.request(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        response.setEncoding('utf8');

        response.on( 'data', function( data ){
        	console.log( 'data : ', data );
        });

    });

    request.on( 'error', function( e ){
    	console.log( 'error : ', e.message );
    });

    request.end();

};


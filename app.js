
/**
 * Module dependencies
 */

var http 	= require('http')
  , path 	= require('path')
  , express = require('express')
  , routes 	= require('./routes')
  , remote  = require( './routes/remote')
  , api 	= require('./routes/api')
  , app		= express();


/**
 * Configuration
 */

 // Configuration

app.configure( function(){

	app.set( 'port', process.env.PORT || 5000 );
	app.engine('html', require('ejs').renderFile);
	app.set( 'views', __dirname + '/views' );
	app.set( 'view options', {
	layout: false
	});
	app.use( express.bodyParser());
	app.use( express.methodOverride());
	app.use( express.static( __dirname + '/public' ));
	app.use( app.router );

	// Handle 404
	app.use(function(req, res) {
	 res.send('404: Page not Found', 404);
	});

	// Handle 500
	app.use(function(error, req, res, next) {
	console.log(error.stack);
	 res.send('500: Internal Server Error', 500);
	});

});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.errorHandler());
}); // Configs End


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get( '/partials/:name', routes.partials );

// JSON API
app.get( '/api/name', api.post );

// Remote API
app.post( '/remote/start', remote.start_sequence );


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Iris Up @ ' + app.get('port'));
});

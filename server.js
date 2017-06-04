const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();

server.connection({ port: 8080 });

server.register(require('vision'), function(err){
	//throwing the err
	if(err) {
		throw err;
	}

	//make this the route for our puppyLove webApp
	server.route({
	    method: 'GET',
	    path: '/',
	    handler: function(request, reply) {
	        //what to display on the 'home page' static file
	        reply.view('index');
	    }
	});

	server.views({
		engines: { html: require('handlebars') },
		relativeTo: __dirname,
		path: 'public'
	});

});

server.start(function() {
    console.log('Server runnning at: ', server.info.uri);
});
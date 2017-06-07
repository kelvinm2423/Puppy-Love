const Hapi = require('hapi');
const Path = require('path');
const db = require('./models');
const server = new Hapi.Server();

server.connection({ port: 8080 });

server.register(require('inert'), function(err) {
    //throwing the err
    if (err) {
        throw err;
    }

    //make this the route for our puppyLove webApp
    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            db.Puppy.findAll({}).then(results => console.log(results));
            //what to display on the 'home page' static file
            reply.file('./public/index.html');

        }
    });
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    });
    // server.views({
    //     engines: { html: require('handlebars') },
    //     relativeTo: __dirname,
    //     path: 'public'
    // });

});

db.sequelize.sync({ force: true });



server.start(function() {
    console.log('Server runnning at: ', server.info.uri);
});

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
            //MySQL displays in the node console
            
            //what to display on the 'home page' static file
             reply.file('./public/index.html');

        }
    });
    server.route({
        method: 'GET',
        path: '/search',
        handler: function(request, reply) {
            //MySQL displays in the node console
            //in where put other columns followed by request query columnname --
            db.Puppy.findAll({where:{breed:request.query.breed}}).then(results => reply(results));
            //what to display on the 'home page' static file
            // reply.file('./public/index.html');

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




});

db.sequelize.sync({ force: false });



server.start(function() {
    console.log('Server runnning at: ', server.info.uri);
});

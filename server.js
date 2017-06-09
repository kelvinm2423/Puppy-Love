const Hapi = require('hapi');
const Path = require('path');
const db = require('./models');
const server = new Hapi.Server();


//new module exports but still lost
module.exports = models;
module.exports = public;

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
            db.Puppy.findAll({
                where: {
                    breed: request.query.breed,
                    age: request.query.age,
                    gender: request.query.gender,
                    ownerCity: request.query.ownerCity,
                }
            }).then(results => reply(results));
        }
    });


//we need this route but i am lost
    server.route({
        method: 'GET',
        path: '/post',
        handler: function(request, reply) {

            Sequelize.sync().then(function() {
                    Puppy.create.call(newPost);


            });
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

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



    server.route({
        method: 'POST',
        path: '/post',
        handler: function(request, reply) {

            db.Puppy.create({
                dogName: request.payload.dogName,
                breed: request.payload.breed,
                age: request.payload.age,
                gender: request.payload.gender,
                image: request.payload.image,
                ownerFirstName: request.payload.ownerFirstName,
                ownerLastName: request.payload.ownerLastName,
                ownerEmail: request.payload.ownerEmail,
                ownerCity: request.payload.ownerCity,
            }).then(results => {
                reply('The dog has been posted!');
            });

        }
    });



    /***********************
        Leave this alone!
     ***********************/
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

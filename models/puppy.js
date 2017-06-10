module.exports = function(sequelize, DataTypes) {

    var Puppy = sequelize.define(
//need to add other columns --
        "Puppy", {

            breed: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            },

            age: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            },
            ownerFirstName: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            },
            ownerLastName: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            },
            ownerEmail: {
                type: DataTypes.STRING,
                allowNull: false,
                // unique: true,
                // validate: {
                //     len: [1]
                // }
            },
            ownerCity: {
                type: DataTypes.STRING,
                allowNull: false,
                // validate: {
                //     len: [1]
                // }
            }

        }
    );

    return Puppy;
};




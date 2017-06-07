module.exports = function(sequelize, DataTypes) {

    var Puppy = sequelize.define(

        "Puppy", {

            breed: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            
            age: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    len: [1]
                }
            }
        }
    );

    return Puppy;
}

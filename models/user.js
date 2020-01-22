var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

// create a sequelize instance with our local postgres database information.
var sequelize = new Sequelize('postgres://postgres@localhost:5432/auth-system');

// setup User model and its fields.
var User = sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: async function(user) {
            const salt = await bcrypt.genSalt(10); 
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
    
});

User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);  //compares db pwd to input pwd
}
  

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = User;
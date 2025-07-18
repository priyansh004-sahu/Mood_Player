
const mongooose = require('mongoose')

function connectToDB() {

    mongooose.connect(process.env.MONGODB_URL)
    .then(()=> {
        console.log('connected to MongoDB');       
    })
    .catch((err)=> {
        console.log('Error to connecting to MongoDB:', err);      
    });
}

module.exports = connectToDB;
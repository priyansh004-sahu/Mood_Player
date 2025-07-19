const mongooose = require('mongoose');

const songSchema = new mongooose.Schema({
    title:String,
    artist:String,
    audio:String,
})

const song = mongooose.model('song', songSchema);

module.exports = song;
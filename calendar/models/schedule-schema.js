var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema ({
    title: String,
    description: String,
    location: String,
    date: { type: Date, default: Date.now },
    time: Number

})

var Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
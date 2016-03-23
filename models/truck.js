var mongoose = require('mongoose');

var truckSchema = new mongoose.Schema({
    TruckDetail: { type: String },
    OutsideTemp: { type: Number },
    ContainerTemp: { type: Number },
    lat: { type: Number },
    lng: { type: Number },
    fuel: { type: Number },
    speed: { type: Number },
    deviceId: { type: String },
    ContainerId: { type: String },
    tirepressure: { type: Object },
    createddate: { type: Date, required: true, default: Date.now }


});

mongoose.model('truck', truckSchema);
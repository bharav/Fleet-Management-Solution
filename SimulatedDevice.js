'use strict';

var say = require("say");
var colors = require("colors");
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;

var connectionString = 'HostName=Kiran-IoT-Hub.azure-devices.net;DeviceId=MyDeviceId;SharedAccessKey=XhAkZVW0tbn3RBAyGGejDFhhPDO53QTgG1PU/FLeBF8=';

var client = clientFromConnectionString(connectionString);


function printResultFor(op) {
    return function printResult(err, res) {
        if (err) console.log(op + ' error: ' + err.toString());
        if (res) console.log(op + ': message sent');
    };
}

let truck1SimulatedData = [
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.997760000000001, lng:77.67108, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.000110000000001, lng:77.67616000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.005120000000002, lng:77.68498000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00726, lng:77.68889, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.008230000000001, lng:77.69244, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.007460000000002, lng:77.68958, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00547, lng:77.6858, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.999920000000001, lng:77.67596, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.996910000000002, lng:77.66953000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99609, lng:77.66787000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.994570000000001, lng:77.66428, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99328, lng:77.66148000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.990010000000002, lng:77.65475, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.98704, lng:77.64831000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.984530000000001, lng:77.64204000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.98384, lng:77.64001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.982700000000001, lng:77.63677000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.982270000000002, lng:77.63281, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.98126, lng:77.63103000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.980250000000002, lng:77.63012, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.978340000000001, lng:77.62876, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.977440000000001, lng:77.62749000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.975270000000002, lng:77.62585, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.974590000000001, lng:77.62484, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.972830000000002, lng:77.62159000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.97268, lng:77.62046000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.972560000000001, lng:77.61959, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.970670000000002, lng:77.61804000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.968420000000002, lng:77.61406000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.968010000000001, lng:77.61187000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.967160000000002, lng:77.61104, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.966280000000001, lng:77.60688, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.965810000000001, lng:77.60395000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96546, lng:77.60138, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96527, lng:77.59945, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.964900000000002, lng:77.59641, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.965340000000001, lng:77.59574, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.966980000000001, lng:77.5947, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96757, lng:77.59409000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96807, lng:77.59231000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.967770000000002, lng:77.59056000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96752, lng:77.58879, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.964080000000001, lng:77.58555000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.963680000000002, lng:77.58436, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96339, lng:77.58204, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.963610000000001, lng:77.57893, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.963940000000001, lng:77.57751, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.964250000000002, lng:77.57644, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.964670000000002, lng:77.57505, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.964220000000001, lng:77.57022, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.963370000000001, lng:77.56769000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96254, lng:77.56517000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.961620000000002, lng:77.56235000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.96146, lng:77.56034000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96081, lng:77.55769000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.95958, lng:77.55595000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.958380000000002, lng:77.555, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.95719, lng:77.5515, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.956320000000002, lng:77.54713000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.955210000000001, lng:77.54509, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50}
    ];
   
    
let truck2SimulatedData = [
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.86837, lng:77.65434, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.869620000000001, lng:77.65334, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.87306, lng:77.65071, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.875810000000001, lng:77.64827000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.878350000000001, lng:77.64646, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.891150000000001, lng:77.63859000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.905410000000002, lng:77.62982000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.909440000000002, lng:77.62734, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.914620000000001, lng:77.6242, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.918080000000002, lng:77.62223, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.919680000000001, lng:77.62107, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.92317, lng:77.61899000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.924740000000002, lng:77.61798, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.927810000000001, lng:77.6161, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.93443, lng:77.61228000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.93542, lng:77.61173000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.937470000000001, lng:77.61056, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.941110000000002, lng:77.60868, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.94256, lng:77.60803, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.94523, lng:77.60726000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.950560000000001, lng:77.60560000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.951920000000001, lng:77.60516000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.95495, lng:77.60546000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.95968, lng:77.60627000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96244, lng:77.60673000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.965770000000001, lng:77.60679, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.96837, lng:77.60609000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.9723, lng:77.60415, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.973040000000001, lng:77.60143000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.974190000000002, lng:77.60144000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.976560000000001, lng:77.60091000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.976590000000002, lng:77.59926, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.980900000000002, lng:77.59726, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.981300000000001, lng:77.59636, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.982040000000001, lng:77.59421, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.98239, lng:77.593, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.982700000000001, lng:77.59241, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.984430000000001, lng:77.58900000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.986, lng:77.5887, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.986640000000001, lng:77.58879, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.988570000000001, lng:77.58656, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.9892, lng:77.58592, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.991180000000002, lng:77.5856, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99328, lng:77.58504, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99389, lng:77.58510000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.995280000000001, lng:77.58493, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99558, lng:77.58488000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99774, lng:77.58436, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00181, lng:77.58411000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.003350000000001, lng:77.58383, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.003950000000001, lng:77.58330000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.003610000000002, lng:77.58391, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.004900000000001, lng:77.58408, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.011140000000001, lng:77.58380000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.01496, lng:77.58393000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.020460000000002, lng:77.58389000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.02279, lng:77.58449, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.025240000000002, lng:77.58507, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.02621, lng:77.5853, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.029280000000002, lng:77.58639000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50}
    ];
    
    
let truck3SimulatedData = [
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.044620000000002, lng:77.50925000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042200000000001, lng:77.51527, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.041480000000002, lng:77.5167, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.039950000000001, lng:77.5184, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.03574, lng:77.52602, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.03476, lng:77.52946, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.03189, lng:77.53472000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.029660000000002, lng:77.53872000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.029100000000001, lng:77.54010000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.035470000000002, lng:77.54134, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.03855, lng:77.5421, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.040490000000002, lng:77.54423000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04109, lng:77.54502000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042230000000002, lng:77.54863, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043840000000001, lng:77.55373, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.044110000000002, lng:77.55535, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04367, lng:77.56002000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04391, lng:77.56163000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04629, lng:77.56501, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.04672, lng:77.56635, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.047120000000001, lng:77.57023000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04751, lng:77.57592000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04766, lng:77.57851000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.047160000000002, lng:77.57978, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.045160000000001, lng:77.58241000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043310000000002, lng:77.58535, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042670000000001, lng:77.58842, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04311, lng:77.59026, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043050000000001, lng:77.59064000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042460000000002, lng:77.59273, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.041950000000002, lng:77.59504000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042110000000001, lng:77.59699, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043310000000002, lng:77.59863, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04372, lng:77.59968, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043730000000002, lng:77.60625, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043050000000001, lng:77.60999000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042180000000002, lng:77.61376000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04132, lng:77.61582, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.040980000000001, lng:77.61734000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04123, lng:77.6222, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.041120000000001, lng:77.62346000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.039570000000001, lng:77.62493, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.038050000000002, lng:77.62608, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.03715, lng:77.62737000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.035330000000002, lng:77.62853000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.02832, lng:77.63206000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.027540000000002, lng:77.63366, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.026110000000001, lng:77.63914000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.025530000000002, lng:77.6409, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.024230000000001, lng:77.64365000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.01993, lng:77.65344, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.017000000000001, lng:77.66034, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.016300000000001, lng:77.66183000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.014410000000002, lng:77.66220000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.01059, lng:77.66248, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.007100000000001, lng:77.66292, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.004750000000001, lng:77.66332000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.003470000000002, lng:77.66441, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00359, lng:77.66595000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.004950000000001, lng:77.66641000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.004650000000002, lng:77.66771, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.003340000000001, lng:77.66797000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00256, lng:77.66938, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00181, lng:77.6722, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00252, lng:77.67286, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.002310000000001, lng:77.67546, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.001430000000001, lng:77.67534, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.00098, lng:77.67568, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.00111, lng:77.67658, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.001280000000001, lng:77.67806, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50}
    ];

client.open(function(err) {
    client.on('message', function(msg) {
        console.log('Id: ' + msg.messageId + ' Body: ' + msg.data);
        let data = JSON.parse(msg.data);
        console.log(colors.inverse(colors.green(data.command)));
        say.speak(data.command);
        client.complete(msg, printResultFor('completed'));
        // reject and abandon follow the same pattern.
        // /!\ reject and abandon are not available with MQTT
    });

    setTimeout(function () {
        let truckDataIndex = 0;
        setInterval(function() {
            var dataJson = {};
            Object.assign(dataJson, {deviceId: 'MyDeviceId', TruckDetail: 'KA03AA1111', ContainerId:"Cont1", drivername:"Mark Zukenbeirg", start: "Silk Board", end:'Hebbal',pic:'http://api.randomuser.me/portraits/thumb/men/14.jpg'}, truck1SimulatedData[truckDataIndex]);
            var data = JSON.stringify(dataJson);
            var message = new Message(data);
            message.properties.add('messageType', 'interactive');
            console.log("Sending message: " + message.getData());
            client.sendEvent(message, printResultFor('send'));
            truckDataIndex++;
        }, 10000);
    }, 0);
    
    setTimeout(function () {
        let truckDataIndex = 0;
        setInterval(function() {
            var dataJson = {};
            Object.assign(dataJson, {deviceId: 'MyDeviceId', TruckDetail: 'KA03AA2222', ContainerId:"Cont1", drivername:"Marko Freytag", start: "Electronic City", end:'Airport',pic:'http://api.randomuser.me/portraits/thumb/men/38.jpg'}, truck2SimulatedData[truckDataIndex]);
            var data = JSON.stringify(dataJson);
            var message = new Message(data);
            message.properties.add('messageType', 'interactive');
            console.log("Sending message: " + message.getData());
            client.sendEvent(message, printResultFor('send'));
            truckDataIndex++;
        }, 10000);
    }, 3333);
    
    setTimeout(function () {
        let truckDataIndex = 0;
        setInterval(function() {
            var dataJson = {};
            Object.assign(dataJson, {deviceId: 'MyDeviceId', TruckDetail: 'KA03AA3333', ContainerId:"Cont1", drivername:"Dieter Gruenewald", start: "Hosur", end:'Airport',pic:'http://api.randomuser.me/portraits/thumb/men/39.jpg'}, truck3SimulatedData[truckDataIndex]);
            var data = JSON.stringify(dataJson);
            var message = new Message(data);
            message.properties.add('messageType', 'interactive');
            console.log("Sending message: " + message.getData());
            client.sendEvent(message, printResultFor('send'));
            truckDataIndex++;
        }, 10000);
    }, 6666);
});


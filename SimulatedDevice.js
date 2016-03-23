'use strict';


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
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.98582,lng:77.63495, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.984840000000002,lng:77.63417000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.98479,lng:77.63415, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.984670000000001,lng:77.63423, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.984430000000001,lng:77.6345, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.984280000000002,lng:77.63457000000001, tirepressure: [50, 50, 50, 50], fuel: 44.8, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.983920000000001,lng:77.6346, tirepressure: [50, 50, 50, 50], fuel: 44.8, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.983450000000001,lng:77.63464, tirepressure: [50, 50, 50, 50], fuel: 44.7, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.982920000000002,lng:77.63472, tirepressure: [50, 50, 50, 50], fuel: 44.7, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.98258,lng:77.63477, tirepressure: [50, 50, 50, 50], fuel: 44.6, speed: 50},
    
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.982610000000001,lng:77.63519000000001, tirepressure: [50, 50, 50, 50], fuel: 44.6, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.982640000000002,lng:77.63565000000001, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.98272,lng:77.63651, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.982890000000001,lng:77.6372, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.982970000000002,lng:77.63745, tirepressure: [50, 50, 50, 50], fuel: 44.4, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.983630000000002,lng:77.63921, tirepressure: [50, 50, 50, 50], fuel: 44.4, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.98413,lng:77.64052000000001, tirepressure: [50, 50, 50, 50], fuel: 44.3, speed: 50},
    {OutsideTemp: 23, ContainerTemp: +0, lat:12.984380000000002,lng:77.64115000000001, tirepressure: [50, 50, 50, 50], fuel: 44.2, speed: 50},
    {OutsideTemp: 23, ContainerTemp: +1, lat:12.984380000000002,lng:77.64115000000001, tirepressure: [50, 50, 50, 50], fuel: 44.1, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.984380000000002,lng:77.64115000000001, tirepressure: [50, 50, 50, 50], fuel: 44.1, speed: 50}
    ];
   
    
let truck2SimulatedData = [
     {OutsideTemp: 23, ContainerTemp: -5, lat:12.999680000000001,lng:77.68169, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.998650000000001,lng:77.68235, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.99797,lng:77.68277, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:12.996580000000002,lng:77.68360000000001, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.99577,lng:77.68415, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.994140000000002,lng:77.68535, tirepressure: [50, 50, 50, 50], fuel: 44.8, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.99327,lng:77.68597000000001, tirepressure: [50, 50, 50, 50], fuel: 44.8, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.992780000000002,lng:77.68638, tirepressure: [50, 50, 50, 50], fuel: 44.7, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:12.98999,lng:77.68849, tirepressure: [50, 50, 50, 50], fuel: 44.7, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.989790000000001,lng:77.68862, tirepressure: [50, 50, 50, 50], fuel: 44.6, speed: 50},

    {OutsideTemp: 23, ContainerTemp: -3, lat:12.98723,lng:77.6901, tirepressure: [50, 50, 50, 50], fuel: 44.6, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.98502,lng:77.69145, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:12.98291,lng:77.69276, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.982320000000001,lng:77.69314, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.981050000000002,lng:77.69395, tirepressure: [50, 50, 50, 50], fuel: 44.4, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.979170000000002,lng:77.69509000000001, tirepressure: [50, 50, 50, 50], fuel: 44.4, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.978280000000002,lng:77.69563000000001, tirepressure: [50, 50, 50, 50], fuel: 44.3, speed: 50},
    {OutsideTemp: 23, ContainerTemp: +0, lat:12.97644,lng:77.69669, tirepressure: [50, 50, 50, 50], fuel: 44.2, speed: 50},
    {OutsideTemp: 23, ContainerTemp: +1, lat:12.97483,lng:77.69761000000001, tirepressure: [50, 50, 50, 50], fuel: 44.1, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:12.972940000000001,lng:77.69874, tirepressure: [50, 50, 50, 50], fuel: 44.1, speed: 50} 
    ];
    
    
let truck3SimulatedData = [
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.043040000000001,lng:77.61070000000001, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.04254,lng:77.61293, tirepressure: [50, 50, 50, 50], fuel: 45.0, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042380000000001,lng:77.61362000000001, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -5, lat:13.042240000000001,lng:77.61409, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.04194,lng:77.61459, tirepressure: [50, 50, 50, 50], fuel: 44.9, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.041850000000002,lng:77.61476, tirepressure: [50, 50, 50, 50], fuel: 44.8, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.041760000000002,lng:77.61506, tirepressure: [50, 50, 50, 50], fuel: 44.8, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.04156,lng:77.61549000000001, tirepressure: [50, 50, 50, 50], fuel: 44.7, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -4, lat:13.04137,lng:77.61605, tirepressure: [50, 50, 50, 50], fuel: 44.7, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:13.041150000000002,lng:77.61675000000001, tirepressure: [50, 50, 50, 50], fuel: 44.6, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:13.04105,lng:77.61718, tirepressure: [50, 50, 50, 50], fuel: 44.6, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:13.041060000000002,lng:77.61732, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -3, lat:13.04109,lng:77.61759, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:13.041110000000002,lng:77.61771, tirepressure: [50, 50, 50, 50], fuel: 44.5, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:13.04113,lng:77.61795000000001, tirepressure: [50, 50, 50, 50], fuel: 44.4, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:13.04118,lng:77.61847, tirepressure: [50, 50, 50, 50], fuel: 44.4, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:13.04119,lng:77.61901, tirepressure: [50, 50, 50, 50], fuel: 44.3, speed: 50},
    {OutsideTemp: 23, ContainerTemp: +0, lat:13.041250000000002,lng:77.61981, tirepressure: [50, 50, 50, 50], fuel: 44.2, speed: 50},
    {OutsideTemp: 23, ContainerTemp: +1, lat:13.041100000000002,lng:77.61981, tirepressure: [50, 50, 50, 50], fuel: 44.1, speed: 50},
    {OutsideTemp: 23, ContainerTemp: -1, lat:13.041200000000002,lng:77.62109000000001, tirepressure: [50, 50, 50, 50], fuel: 44.1, speed: 50} 
    ];

client.open(function(err) {
    client.on('message', function(msg) {
        console.log('Id: ' + msg.messageId + ' Body: ' + msg.data);
        client.complete(msg, printResultFor('completed'));
        // reject and abandon follow the same pattern.
        // /!\ reject and abandon are not available with MQTT
    });

    setTimeout(function () {
        let truckDataIndex = 0;
        setInterval(function() {
            var dataJson = {};
            Object.assign(dataJson, {deviceId: 'MyDeviceId', TruckDetail: 'KA03AA1111', ContainerId:"Cont1"}, truck1SimulatedData[truckDataIndex]);
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
            Object.assign(dataJson, {deviceId: 'MyDeviceId', TruckDetail: 'KA03AA2222', ContainerId:"Cont1"}, truck2SimulatedData[truckDataIndex]);
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
            Object.assign(dataJson, {deviceId: 'MyDeviceId', TruckDetail: 'KA03AA3333', ContainerId:"Cont1"}, truck3SimulatedData[truckDataIndex]);
            var data = JSON.stringify(dataJson);
            var message = new Message(data);
            message.properties.add('messageType', 'interactive');
            console.log("Sending message: " + message.getData());
            client.sendEvent(message, printResultFor('send'));
            truckDataIndex++;
        }, 10000);
    }, 6666);
});


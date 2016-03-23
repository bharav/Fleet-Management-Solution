// 'use strict';

// var AMQPClient = require('amqp10').Client;
// var Policy = require('amqp10').Policy;
// var translator = require('amqp10').translator;
// var Promise = require('bluebird');

// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/iothubdb');  
// require('./models/truck');
// var truck = mongoose.model('truck');


// var protocol = 'amqps';
// var eventHubHost = 'ihsuprodhkres018dednamespace.servicebus.windows.net';
// var sasName = 'iothubowner';
// var sasKey = 'PmpCfVPcIZhhLhhkVwsRlAM1D3VUuCQVy0LglW4UTjk=';
// var eventHubName = 'iothub-ehub-kiran-iot-21297-184f0d0f77';
// var numPartitions = 2;



// var filterOffset = new Date().getTime();
// var filterOption;
// if (filterOffset) {
//   filterOption = {
//   attach: { source: { filter: {
//   'apache.org:selector-filter:string': translator(
//     ['described', ['symbol', 'apache.org:selector-filter:string'], ['string', "amqp.annotation.x-opt-enqueuedtimeutc > " + filterOffset + ""]])
//     } } }
//   };
// }




// var uri = protocol + '://' + encodeURIComponent(sasName) + ':' + encodeURIComponent(sasKey) + '@' + eventHubHost;
// var recvAddr = eventHubName + '/ConsumerGroups/$default/Partitions/';

// var client = new AMQPClient(Policy.EventHub);




// var messageHandler = function (partitionId, message) {
//   console.log('Received(' + partitionId + '): ', message.body);
  
//   var truckdata = new truck(message.body);
//   truckdata.save(function (err,trucks) {
//     if(err)
//     {
//         console.log(err);
//     }  
//     else
//     {
//         console.log('Data saved in MongoDB');
//     }
//   })
// };

// var errorHandler = function(partitionId, err) {
//   console.warn('** Receive error: ', err);
// };




// var createPartitionReceiver = function(partitionId, receiveAddress, filterOption) {
//   return client.createReceiver(receiveAddress, filterOption)
//     .then(function (receiver) {
//       console.log('Listening on partition: ' + partitionId);
//       receiver.on('message', messageHandler.bind(null, partitionId));
//       receiver.on('errorReceived', errorHandler.bind(null, partitionId));
//     });
// };




// client.connect(uri)
//   .then(function () {
//     var partitions = [];
//     for (var i = 0; i < numPartitions; ++i) {
//       partitions.push(createPartitionReceiver(i, recvAddr + i, filterOption));
//     }
//     return Promise.all(partitions);
// })
// .error(function (e) {
//     console.warn('Connection error: ', e);
// });













//////////////////////////////////////////////////////////////////////////////






// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

var Client = require('azure-iothub').Client;
var Message = require('azure-iot-common').Message;

var connectionString = 'HostName=Kiran-IoT-Hub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=PmpCfVPcIZhhLhhkVwsRlAM1D3VUuCQVy0LglW4UTjk=';
var targetDevice = 'MyDeviceId';

var CtDclient = Client.fromConnectionString(connectionString);

CtDclient.open(function (err) {
  if (err) {
    console.error('Could not connect: ' + err.message);
  } else {
    console.log('Client connected');













var AMQPClient = require('amqp10').Client;
var Policy = require('amqp10').Policy;
var translator = require('amqp10').translator;
var Promise = require('bluebird');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/iothubdb');  
require('./models/truck');
var truck = mongoose.model('truck');


var protocol = 'amqps';
var eventHubHost = 'ihsuprodhkres018dednamespace.servicebus.windows.net';
var sasName = 'iothubowner';
var sasKey = 'PmpCfVPcIZhhLhhkVwsRlAM1D3VUuCQVy0LglW4UTjk=';
var eventHubName = 'iothub-ehub-kiran-iot-21297-184f0d0f77';
var numPartitions = 2;



var filterOffset = new Date().getTime();
var filterOption;
if (filterOffset) {
  filterOption = {
  attach: { source: { filter: {
  'apache.org:selector-filter:string': translator(
    ['described', ['symbol', 'apache.org:selector-filter:string'], ['string', "amqp.annotation.x-opt-enqueuedtimeutc > " + filterOffset + ""]])
    } } }
  };
}

var uri = protocol + '://' + encodeURIComponent(sasName) + ':' + encodeURIComponent(sasKey) + '@' + eventHubHost;
var recvAddr = eventHubName + '/ConsumerGroups/$default/Partitions/';

var client = new AMQPClient(Policy.EventHub);




var messageHandler = function (partitionId, message) {
  console.log('Received(' + partitionId + '): ', message.body);
  
  if(message.body.ContainerTemp > -5){
      console.log("ContainerTemp is low!");
    var data = JSON.stringify({ command : 'Decreasing the temperature to -5 degrees' });
    var message = new Message(data);
    console.log('Sending message: ' + message.getData());
    CtDclient.send(targetDevice, message, printResultFor('send'));
  }
  
  var truckdata = new truck(message.body);
  truckdata.save(function (err,trucks) {
    if(err)
    {
        console.log(err);
    }  
    else
    {
        console.log('Data saved in MongoDB');
    }
  })
};

var errorHandler = function(partitionId, err) {
  console.warn('** Receive error: ', err);
};




var createPartitionReceiver = function(partitionId, receiveAddress, filterOption) {
  return client.createReceiver(receiveAddress, filterOption)
    .then(function (receiver) {
      console.log('Listening on partition: ' + partitionId);
      receiver.on('message', messageHandler.bind(null, partitionId));
      receiver.on('errorReceived', errorHandler.bind(null, partitionId));
    });
};
client.connect(uri)
  .then(function () {
    var partitions = [];
    for (var i = 0; i < numPartitions; ++i) {
      partitions.push(createPartitionReceiver(i, recvAddr + i, filterOption));
    }
    return Promise.all(partitions);
})
.error(function (e) {
    console.warn('Connection error: ', e);
});
  }
});

// Helper function to print results in the console
function printResultFor(op) {
  return function printResult(err, res) {
    if (err) {
      console.log(op + ' error: ' + err.toString());
    } else {
      console.log(op + ' status: ' + res.constructor.name);
    }
  };
}
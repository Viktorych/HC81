var config = require('../config');
var opts={
    silent:true //Отображение сообщений PLC в консоле.
};
var nodes7 = require('nodes7');
var conn = new nodes7(opts);
var doneReading = false;
var doneWriting = false;
var status = 0;
var plc = {};

conn.initiateConnection(
    {

        port: config.PLC.port,
        host: config.PLC.ip,
        rack: config.PLC.rack,
        slot: config.PLC.slot

    }, connected);

function forEach(data, callback) {
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            callback(key, data[key]);
        }
    }
}


function connected(err) {
    if (typeof(err) !== "undefined") {
        process.exit();
    }
    conn.setTranslationCB(function (tag) {
        return config.PLC_Variables[tag];
    });
    var list_variables = [];
    forEach(config.PLC_Variables, function (key, value) {
        list_variables.push(key);
    });
//    console.log(list_variables);
    conn.addItems(list_variables);
}


var timerId = setInterval(function () {
    conn.readAllItems(valuesReady);
}, 1000);

function valuesReady(anythingBad, values) {
    if (anythingBad) {
        status=0;
    }
    status=1;
    plc = values;
    plc.status = status;
    //console.log(values);
    doneReading = true;
    if (doneWriting) {
        process.exit();
    }

}

var read = function getvaluesReady() {
    return plc;
};
module.exports.plc = read;

import React, { Component } from 'react'


class PuckConnect extends Component {
    render() {
        return (
            <div>
                <button onClick={this.connectClick.bind(this)}>Connect to button</button>
            </div>
        );
    }

    connectClick(event) {
        console.log('clicked', event);
        navigator.bluetooth.requestDevice({
            filters: [{
                services: [0xabcd],
              }]
        })
        .then(device => {
            console.log("requested", device);
            return device.gatt.connect();
        })
        .then(server => {
            console.log('got server', server);
            return server.getPrimaryService(0xabcd);
        })
        .then(service => {
            console.log('got service', service);

            service.getCharacteristic(0xAB40).then(characteristic => {
                this.startListeningForTime(characteristic);
            });
            service.getCharacteristic(0xAB41).then(characteristic => {
                this.startListeningForTime(characteristic);
            })
        })
        // .then(characteristic => {
        //     return characteristic.startNotifications();
        // })
        // .then(char => {
        //     console.log('notification started', char)
        //     // Writing 1 is the signal to reset energy expended.
        //     char.addEventListener('characteristicvaluechanged', this.handleCharacteristicValueChanged.bind(this));
        // })
    }

    handleCharacteristicValueChanged(event) {
        var enc = new TextDecoder("utf-8");
        var value = event.target.value;
        console.log('Received ' + enc.decode(value))
        // TODO: Parse Heart Rate Measurement value.
        // See https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor/heartRateSensor.js
    }

    startListeningForTime(characteristic) {
        characteristic.startNotifications()
        .then(char => {
            console.log('notification started', char)
            // Writing 1 is the signal to reset energy expended.
            char.addEventListener('characteristicvaluechanged', this.handleCharacteristicValueChanged.bind(this));
        })
    }
}



export default PuckConnect;
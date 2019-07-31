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
              services: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e']
            }]}).then(device => device.gatt.connect())
            .then(server => {
                return server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e');
            })
            .then(service => {
                console.log('got service', service);
                return service.getCharacteristic('6e400003-b5a3-f393-e0a9-e50e24dcca9e');
            }).then(characteristic => {
                console.log('got characteristic', characteristic);
                return characteristic.startNotifications()
                .then(char => {
                    console.log('notification started');
                    characteristic.addEventListener('characteristicvaluechanged',
                                                    this.OnButtonClick.bind(this));
                });
            })
    }

    OnButtonClick(event) {
        console.log('button clicked!!!');
    }
}



export default PuckConnect;
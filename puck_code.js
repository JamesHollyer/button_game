NRF.setServices({
  0xabcd : {
    0xAB40 : {
      value : "Hello",
      maxLen : 50,
      notify: true
    },
    0xAB41 : {
      value : "Hello",
      maxLen : 50,
      notify: true
    }
  }
}, {advertise: [ 0xabcd ]});
console.log('temp?', E.getTemperature());
var  on = false;
setWatch(function(e) {
  on = !on;
  LED1.write(on);
  //console.log('temp?', E.getTemperature());
  var pressTime = e.time - e.lastTime;
  NRF.updateServices({
    0xBC10 : {
      0xAB40 : {
        value : "time: " + e.time,
        notify: true
      },
      0xAB41 : {
        value : "lastTime: " + e.lastTime,
        maxLen : 50,
        notify: true
      },
    }
  });
}, BTN, { repeat:true, edge:"falling", debounce: 50 });

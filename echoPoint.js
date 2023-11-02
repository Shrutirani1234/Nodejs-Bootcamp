const EventEmitter = require('events');

const shoutEvent = new EventEmitter();

shoutEvent.on('echopoint', function(data){
    console.log("custom event received:",data);

})

shoutEvent.emit('echoPoint',
{
    message : 'shouting name on echo point:'
})
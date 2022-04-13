const  events = require('events')

//Creating an instance of event emitter in single line
const eventEmitter = new events.EventEmitter()
const add = (a,b) =>{
    console.log("Sum ",a+b);
}
eventEmitter.on('myEvent',add)
  
console.log('Event names before remove',eventEmitter.eventNames());

eventEmitter.off('myEvent',add) //here we can use removeListener/off
console.log('Event names after remove',eventEmitter.eventNames());

const eventEmitter2 = new events.EventEmitter()
eventEmitter2.on('myEvent1',add)
eventEmitter2.on('myEvent2',add)

console.log('Event name before remove ',eventEmitter2.eventNames());
eventEmitter2.removeAllListeners() 
console.log('Event after removing ',eventEmitter2.eventNames());
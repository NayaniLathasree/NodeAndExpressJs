console.log("program strated");
const  events = require('events')

//return class of event emiiter
const EventEmitter = events.EventEmitter;

//Creating an instance/object of event emiiter
const eventEmitter = new EventEmitter()

//Creating an instance of event emitter in single line
const eventEmitter2 = new events.EventEmitter()

//LISTENING TO AN EVENT
eventEmitter.on('test',()=>{    //with the same event name we can have multile events

    console.log('test event executed');
})

eventEmitter.on('test',()=>{
    console.log('test 1 event executed');
})
//CALL THE EVENTS/EXECUTE EVENTS.
//we can execute multiple times 
//we can't subscribe before publish means we can't emit before eventEmitter.on

eventEmitter.emit('test')
eventEmitter.emit('test')

eventEmitter.on('add',(a,b)=>{
    console.log("Sum ",(a+b));
})
eventEmitter.emit('add',10,20)

eventEmitter2.on('print',()=>{
    console.log("priting data");
})
eventEmitter2.emit('print')
//to below code is invalid
// eventEmitter.emit('print')
console.log('eventEmitter',eventEmitter);
console.log('EventEmitter -  ',EventEmitter);
//if we use once method it will excute only one how many we call that event listerner.
//once it excute it removed from that eventemitter
eventEmitter.once('myEvent',(data)=>{
    console.log('Once - ',data);
})
//Before call the eventEmitter emit
const eventsName = eventEmitter.eventNames()
console.log('eventsName -',eventsName );
eventEmitter.emit('myEvent','execute once')
eventEmitter.emit('myEvent','execute once')
eventEmitter.emit('myEvent','execute once')
//Before call the eventEmitter emit
const eventsName1 = eventEmitter.eventNames()
console.log('eventsName -',eventsName1 );

console.log("program ended");
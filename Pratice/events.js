const events  = require('events')

const eventEmitter =  new events.eventEmitter()

eventEmitter.on('event', ()=>{
    console.log("Event Occurred");
})

eventEmitter.emit('event')
eventEmitter.emit('event')


const eventEmitter1 = new events.eventEmitter()

eventEmitter1.once('eventOnce',()=>{
    console.log("Event Once Occurred");
})

eventEmitter.emit('eventOnce')
eventEmitter.emit('eventOnce')
eventEmitter.emit('eventOnce')



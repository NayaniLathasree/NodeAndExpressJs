console.log('Program started');
const fs = require('fs')
if(!fs.existsSync('demo')){
    fs.mkdirSync('demo');
}
fs.writeFileSync('demo/test.txt','Hello world');
if(fs.existsSync(demo/test.txt)){

    const data = fs.readFileSync('demo/test.txt');
    console.log(data);  // -->if we access like this it will return buffer value so we will convert by using toString().
    console.log(data.toString());  //like this we access 
}
console.log('program ended');
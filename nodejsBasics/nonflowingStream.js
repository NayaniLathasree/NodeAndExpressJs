const fs =  require('fs')

const readStream = fs.createReadStream('./view/view.txt')

setTimeout(()=>{
    const data = readStream.read(1)
    console.log('Data'+ data);
},100)
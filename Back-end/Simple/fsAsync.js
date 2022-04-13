const fs = require('fs')
let jsonData = [{name:"John",city:"New York"},{name:"Phil",city:"Ohio"}]

const jsonContent = JSON.stringify(jsonData)
fs.writeFile('details.json',jsonContent,(err)=>{
    if(!err){
    console.log('writing in Json Format');
}else{
    console.log('Failed to wirte');
}
})

fs.readFile('details.json',(err,data)=>{
    if(!err){
        console.log('writing in Json Format' + data);
    }else{l
        console.log('Failed to wirte');
    }
})



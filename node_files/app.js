const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'apple');

for(i=0;i<5;i++) {
fs.writeFileSync(dirPath + "/nameoffile"+i+".txt","Hello world!");
}
fs.readdir(dirPath,(err,file)=>{
    console.log(file);
})

const fs = require("fs");
const file = process.argv[2]
// Option #1 (anonymous function)
// fs.readFile(file,'utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data.split("\n").length - 1)
// });

// Option #2 (declared callback function)
fs.readFile(file, 'utf-8',callback)

function callback(err,data){
    if(err){
        throw err;
    }
    console.log(data.split("\n").length - 1)
}

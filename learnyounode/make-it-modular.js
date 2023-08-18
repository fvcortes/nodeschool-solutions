const mymodule = require("./mymodule")

const dir = process.argv[2]
const ext = process.argv[3]

mymodule(dir,ext,callback)

function callback(err,data){
    if(err){
        throw err
    }
    data.forEach(function (file){
        console.log(file)
    })
}
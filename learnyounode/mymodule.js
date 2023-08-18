const fs = require("fs")
const path = require("path")

module.exports = function (dir, ext, callback){
    fs.readdir(dir,function (err,files){
        if(err){
            return callback(err)
        }
        const data = []
        files.forEach(function(file){
            if(path.extname(file).endsWith(ext)){
                data.push(file)
            }
        })
        callback(null,data)
    })
}

const fs = require("fs")
const path = require("node:path")
const pathToDir = process.argv[2]
const extFilter = process.argv[3]

fs.readdir(pathToDir,callback)

// fs.readdir(pathToDir,(err,files) => {
// })

function callback(err, files){
    if(err) {
        throw err
    }
    files.forEach(function (file){
        if(path.extname(file) === '.' + extFilter){
            console.log(file)
        }
    })
}


// Gabarito
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
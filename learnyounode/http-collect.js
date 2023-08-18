const http = require("http")
const concatStream = require('concat-stream')

const url = process.argv[2]

http.get(url, function (response){
    response.pipe(concatStream(function(data){
        console.log(data.length)
        console.log(data.toString('utf-8'))      
    })).on('error', function (err){
        console.error(err)
    })
})



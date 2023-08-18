const http = require('http')
const concatStream = require("concat-stream")

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

var urlsReturned = 0

var responseStrings = []


function getRequest(url,order){
    http.get(url,function (response){
        response.pipe(concatStream(function (buff){
            var responseString = buff.toString('utf-8')
            responseStrings[order] = responseString
        }))
        response.on('close',function(){
            urlsReturned = urlsReturned + 1
            // console.log("urlsReturned: " + urlsReturned)
            // console.log("responseStrings.length: " + responseStrings.length)
            if(urlsReturned == 3){
                responseStrings.forEach(function(string){
                    console.log(string)
                })
            }
        })
    })
}

getRequest(url1,0)
getRequest(url2,1)
getRequest(url3,2)

//console.log(responseStrings.length)


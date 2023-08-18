const http = require("http")
const map = require("through2-map")

const port = process.argv[2]

const server = http.createServer(function(request,response){
    if(request.method == "POST"){
        response.writeHead(200,{'content-type': 'text/plain'})
        request.pipe(map(function(data){
            return data.toString().toUpperCase()
        })).pipe(response)
    } else {
        response.end("Not a POST request")
    }
})

server.listen(port)


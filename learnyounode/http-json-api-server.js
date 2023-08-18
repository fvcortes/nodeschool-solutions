const http = require("http")

const port = process.argv[2]

const server = http.createServer(function(request,response){
    if(request.method == "GET"){
        response.writeHead(200, {"Content-Type": "application/json"})
        if(request.url.startsWith("/api/parsetime")){
            const iso = request.url.split("?")[1].split("=")[1]
            const date = new Date(iso)
            const hour = date.getHours()
            const minute = date.getMinutes()
            const second = date.getSeconds()
            response.end(JSON.stringify({"hour":hour,"minute":minute,"second":second}))
        } else {
            if(request.url.startsWith("/api/unixtime")){
                const iso = request.url.split("?")[1].split("=")[1]
                response.end(JSON.stringify({"unixtime":new Date(iso).getTime()}))
            }
        }
    } else {
        response.end("Send me a GET request")
    }

})

server.listen(port)
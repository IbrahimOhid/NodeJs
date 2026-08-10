import http from 'http';

// create a server

const server = http.createServer((req, res) =>{
    console.log("Request Method:", req.method)
    
    // set the response header
    res.writeHead(200, {"Content-type": "text/plain"});
   

    if(req.method === "GET"){
        res.end("You Made a GET Request");
    }else if(req.method === "POST"){
        res.end("You Made a POST Request");
    }else if(req.method === "PUT"){
        res.end("You Made a PUT Request");
    }else{
        res.writeHead(404, {"Content-type": "text/plain"});
        res.end("404 Not Found");
    }
})

// define the port number
const PORT = 3000;

// listen for requests on port 3000
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
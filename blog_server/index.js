import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res)=>{
    const {url} = req;
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // route handling
    if(url === '/'){
        res.end('Welcome to the Home Page!');
    }else if(url === "/blog"){
        res.end('Welcome to the Blog Page!');
    }else if(url.startsWith('/blog/')){
        const blogId = url.split("/")[2];
        res.end(`"id": ${blogId}, "Title": "Blog Title", "Content": "Blog Content"`);
    }else{
        res.end('404 Not Found');
    }

})

// port listening
const port = process.env.PORT || 3000;
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})
import fs from "fs";


// traditional way
fs.readFile("/NodeJs/stream/files/large-text.txt", "utf-8", (err, data)=>{
    if(err) throw err
    console.log(data.length)
})

// stream way
const readStream = fs.createReadStream("/NodeJs/stream/files/large-text.txt", {
    encoding: "utf-8",
    highWaterMark: 1024
});


readStream.on("data", (chunk)=>{
    console.log(`Received ${chunk.length} bytes of data.`)
})
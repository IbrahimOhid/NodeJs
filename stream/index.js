import fs from "fs";

const readStream = fs.createReadStream("/Nodejs/stream/files/large-text.txt",{
    encoding: "utf-8",
    highWaterMark: 1024
})

readStream.on("data", (chunk) => {
    console.log(`New chunk received: ${chunk.length} bytes of data.`);
    
});

readStream.on("end", () => {
    console.log("Finished reading the file.");
});
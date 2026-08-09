import fs from "fs";

const writeStream = fs.createWriteStream("/Nodejs/stream/files/output.txt");

writeStream.write("Hello, this is the first line of text.\n");
writeStream.write("This is the second line of text.\n");  
writeStream.write("This is the third line of text.\n"); 
writeStream.write("This is the fourth line of text.\n");


writeStream.end("This is the last line of text.\n");

writeStream.on("finish", () => {
    console.log("Finished writing to the file.");
});
import fs from "node:fs";

// read file

fs.readFile("/NodeJs/buffer_practice/files/example.txt", (err, data)=>{
    if(err) throw err;
    
    // encoding
    const encoding = data.toString("base64");
    console.log(`Encoded Data: \n ${encoding}`)
    fs.writeFile("/NodeJs/buffer_practice/files/output.txt", encoding, (err)=>{
        console.log("Error")
    })

    // decoding
    const decoding = Buffer.from(encoding, "base64").toString("utf-8")
    console.log(`Decoded Data: \n ${decoding}`)
})


 fs.readFile("/NodeJs/buffer_practice/files/output.txt", (err, data)=>{
        if(err) throw err

        // encoding 
        const encoding = data.toString("utf-8");
        
        // decoding
        const decoding = Buffer.from(encoding, "base64").toString("utf-8")
        console.log("Decoded Data:");
        console.log(decoding);
    })
    
 
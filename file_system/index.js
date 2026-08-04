import { readFile } from "node:fs";
import { writeFile } from "node:fs";

// Read file asynchronously

// readFile('files/example.txt', (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })

// readFile("files/example.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFile("files/test.md", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Write file asynchronously

const content = "This is some content to write to the file.";

writeFile("files/message.txt", content, "utf8", (err) => {
  if (err) throw err;
  console.log("File has been written!");
});
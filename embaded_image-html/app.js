import fs from "node:fs";

// read image path
fs.readFile("/NodeJs/embaded_image-html/image/ibrahim.png", (err, data) => {
  if (err) throw err;

  // image convert
  const base64Image = data.toString("base64");

  // create image url
  const imgSrc = `data:image/jpg;base64, ${base64Image}`;

  // create htmlcontent
  const htmlContent = `<!DOCTYPE html>
       <html lang="en">
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embaded Image</title>
    <style>
    body{
        margin: 50px;
        text-align: center
    }
        img{
            width: 300px;
            border: 2px solid black
        }
    </style>
</head>
<body>
    <h1>This is My Profile Image</h1>
    <img src= "${imgSrc}" alt="ibrahim image">
</body>
</html>`;

  // create html file
  fs.writeFile("/NodeJs/embaded_image-html/index.html", htmlContent, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Html File Created Successfully");
  });
});

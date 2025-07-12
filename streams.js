const fs = require("fs");


const readStream = fs.createReadStream("./docs/blog.txt");
const writeStream = fs.createWriteStream("./docs/blog1.txt");


readStream.on("data", (chunk) => {
    console.log("....New Chunk!....")
    console.log(chunk)
    writeStream.write(chunk);
});
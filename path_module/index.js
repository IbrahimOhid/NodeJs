import path from "path";
import { fileURLToPath } from "url";

// file name
const __filename = fileURLToPath(import.meta.url);
// directory name
const __dirname = path.dirname(__filename);
// full path
const fullPath = path.join(__dirname, "example", "file.txt");
// get the extension name
const extName = path.extname(fullPath);
console.log(extName)

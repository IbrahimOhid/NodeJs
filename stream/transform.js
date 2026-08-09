import { Transform } from "node:stream";

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

process.stdin.pipe(transformStream).pipe(process.stdout);

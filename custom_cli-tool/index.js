#!/usr/bin/env node

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What's Your Name? \n", (name)=>{
    console.log(`Hello ${name}`)
    rl.close
})
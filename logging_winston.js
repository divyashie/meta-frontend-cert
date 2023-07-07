/* 
Server script running with logging level including `debug` , `info`, `error` 
*/ 
const express = require('express') 
const path = require('path')   
const fs = require('fs')                 //file system on your computer 
const winston = require('winston')       //logging library useful in debugging 

const PORT = 3418 
const root = process.argv[2] 
const level = process.argv[3] 

const transport = new winston.transports.Console() 
winston.add(transport) 
winston.level = level 

//Main server object 
const app = express() 

//Handle all requests 
app.use((req, res, next) => {
    const actual = path.join(root, req.url) 
    fs.stat(actual, (err, stats) => {
        if(err) {
            winston.error(`Unable to find "${actual}"`)
            res.status(404).send(
                `<html><body><p>cannot read ${actual}</p></body></html>`
            )
        } else if (!stats.isFile()){
            winston.error(`"${actual}" is not a file`)
            res.status(404).sendFile(
                `<html><body><p>cannot read ${actual}</p></body></html>`
            )
        } else {
            winston.debug(`Serving "${actual}"`)
            fs.readFile(actual, 'utf-8', (err, data) => {
                res.status(200).send(data)
            })
        }
    })
})

app.listen(PORT, ()=>{
    winston.info(`Running on port ${PORT} with root ${root}`)
})


/*
running CMD -----  node {FILENAME.js} -------
Debugger attached.
{"level":"info","message":"Running on port 3418 with root undefined"}

running CMD ----- node logging_winston.js node_modules/logging/node_modules/debug  -------
Debugger attached.
{"level":"info","message":"Running on port 3418 with root node_modules/logging/node_modules/debug"}
*/
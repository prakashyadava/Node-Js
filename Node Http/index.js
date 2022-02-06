const { log } = require('console');
const http = require('http')

const hostname = 'localhost';
const port = 5500;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    // console.log(req.headers);
    // res.statusCode = 200;
    // res.setHeader('Content-Type','text/html');
    // res.end('<html><body><h1>Hello prakash</h1></body></html>');
    console.log("Request for "+ req.url + " by method "+ req.method);
    if(req.method=='GET'){
        var fileurl;
        if(req.url=='/') fileurl='/index.html';
        else fileurl = req.url;
        var filePath = path.resolve('./public' + fileurl);
        const fileExt = path.extname(filePath);
        if(fileExt=='.html'){
            fs.exists(filePath,(exists)=>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error : 404 '+ fileurl + ' not found </h1></body></html>');
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type','text/html');
                fs.createReadStream(filePath).pipe(res);

                
            })
        }else{
            res.statusCode = 404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error : 404 '+ fileurl + ' not a html file </h1></body></html>');
        }
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>Error : 404 '+ req.method + ' not supported </h1></body></html>');

    }
})
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})
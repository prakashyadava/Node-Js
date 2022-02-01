const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('welcome to about page')
    }
    else{
    res.end(`
     <h1>Oops!!!</h1>
     <p>we can't find this page</p>
     <a href="/">back home </a>
    `)
    }
   
})

server.listen(5500)
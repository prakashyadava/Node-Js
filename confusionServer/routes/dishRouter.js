const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = express();

dishRouter.use(morgan('dev'));
dishRouter.use(bodyParser.json());
dishRouter.all('/dishes',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
});
dishRouter.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you');
});
dishRouter.post('/dishes',(req,res,next)=>{
    res.end('will add the dish: '+ req.body.name + ' with details: '+ req.body.description);

});
dishRouter.put('/dishes',(req,res,next)=>{
    res.statusCode = 403;
    res.end('put operation not supported on /dishes');
});
dishRouter.delete('/dishes',(req,res,next)=>{
    res.end('deleting all the dishes');
});
dishRouter.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send details of the dishes: '+ req.params.dishId+' to you!');
});
dishRouter.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('post operation not supported on /dishes/'+ req.params.dishId);
});
dishRouter.put('/dishes/:dishId',(req,res,next)=>{
    res.write('Updating the dish: '+ req.params.dishId+ '\n');
    res.end('will update the dish: '+ req.body.name  + ' with details: '+ req.body.description);

});
dishRouter.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('deleting dish : ' + req.params.dishId);
});

module.exports = dishRouter;
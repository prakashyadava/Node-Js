const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const leaderRouter = express();

leaderRouter.use(morgan('dev'));
leaderRouter.use(bodyParser.json());
leaderRouter.all('/leaders',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
});
leaderRouter.get('/leaders',(req,res,next)=>{
    res.end('Will send all the leaders to you');
});
leaderRouter.post('/leaders',(req,res,next)=>{
    res.end('will add the leader: '+ req.body.name + ' with details: '+ req.body.description);

});
leaderRouter.put('/leaders',(req,res,next)=>{
    res.statusCode = 403;
    res.end('put operation not supported on /leaders');
});
leaderRouter.delete('/leaders',(req,res,next)=>{
    res.end('deleting all the leaders');
});
leaderRouter.get('/leaders/:leaderId',(req,res,next)=>{
    res.end('Will send details of the leaders: '+ req.params.leaderId+' to you!');
});
leaderRouter.post('/leaders/:leaderId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('post operation not supported on /leaders/'+ req.params.leaderId);
});
leaderRouter.put('/leaders/:leaderId',(req,res,next)=>{
    res.write('Updating the leader: '+ req.params.leaderId+ '\n');
    res.end('will update the leader: '+ req.body.name  + ' with details: '+ req.body.description);

});
leaderRouter.delete('/leaders/:leaderId',(req,res,next)=>{
    res.end('deleting leader : ' + req.params.leaderId);
});

module.exports = leaderRouter;
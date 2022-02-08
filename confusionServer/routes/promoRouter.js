const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const promoRouter = express();

promoRouter.use(morgan('dev'));
promoRouter.use(bodyParser.json());
promoRouter.all('/promotions',(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    next();
});
promoRouter.get('/promotions',(req,res,next)=>{
    res.end('Will send all the promotions to you');
});
promoRouter.post('/promotions',(req,res,next)=>{
    res.end('will add the promo: '+ req.body.name + ' with details: '+ req.body.description);

});
promoRouter.put('/promotions',(req,res,next)=>{
    res.statusCode = 403;
    res.end('put operation not supported on /promotions');
});
promoRouter.delete('/promotions',(req,res,next)=>{
    res.end('deleting all the promotions');
});
promoRouter.get('/promotions/:promoId',(req,res,next)=>{
    res.end('Will send details of the promotions: '+ req.params.promoId+' to you!');
});
promoRouter.post('/promotions/:promoId',(req,res,next)=>{
    res.statusCode = 403;
    res.end('post operation not supported on /promotions/'+ req.params.promoId);
});
promoRouter.put('/promotions/:promoId',(req,res,next)=>{
    res.write('Updating the promo: '+ req.params.promoId+ '\n');
    res.end('will update the promo: '+ req.body.name  + ' with details: '+ req.body.description);

});
promoRouter.delete('/promotions/:promoId',(req,res,next)=>{
    res.end('deleting promo : ' + req.params.promoId);
});

module.exports = promoRouter;
const express=require('express');
const bodyParser=require('body-parser');
const dishRoute=express.Router();
dishRoute.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
})
.get((req,res,next)=>{
    res.statusCode=200;
    res.end("Will send you all the dishes ");
})
.post((req,res,next)=>{
    res.statusCode=200;
    res.end("Will add the dish with"+req.body.name+" and detail"+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end("Put operations are not supported");
})
.delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Will delete all the dishes");
});


dishRoute.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode=200;
    next();
    })
    .get((req,res,next)=>{
        res.statusCode=200;
        res.end("Will send the dish detail of dish "+ req.params.dishId);
    })
    .post((req,res,next)=>{
     res.statusCode=403;
     res.end("Post Operations are not correct");
    })
    .put((req,res,next)=>{
          res.statusCode=200;
          res.end("Updated query will be on "+ req.params.dishId+
          "\n The dish will be"+req.body.name+"and details "+req.body.description);
    }
          )
    .delete((req,res,next)=>{
    res.statusCode=200;
    res.end("Deletion operation perform on "+ req.params.dishId);
    });
    
module.exports=dishRoute;
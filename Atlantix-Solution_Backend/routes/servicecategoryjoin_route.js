var sercatjoin = require("../model/service_model");
var express = require("express");
var router = express.Router();

router.get('/',function(req,res,next){
    sercatjoin.getServiceByCategory(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
   });
});

module.exports=router;
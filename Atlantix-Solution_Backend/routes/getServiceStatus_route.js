var servicestatus = require("../model/service_model");
var express = require("express");
var router = express.Router();

router.get('/:pk_id/:p_mobile',function(req,res,next){
    servicestatus.getServiceStatus(req.params.pk_id,req.params.p_mobile,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
});

module.exports = router;

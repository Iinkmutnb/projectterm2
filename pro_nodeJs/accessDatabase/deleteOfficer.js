var connection = require('./connectDatabase.js');

var connection =connection.connection();
var fs = require('fs');



module.exports={
    deleteOfficer: function(req,res,code,Src) {
 
        connection.query("DELETE FROM customer WHERE code=?",[code] ,function (err, result, fields) {
            if (err) { res.setHeader('Access-Control-Allow-Origin', '*'); return (res.json({'qreury':false}))}
            fs.unlink('../thesis_pro_1/src/home/picture/officer/'+Src,function(err){
                    //console.log(result);
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.json({'qreury':true});
                });
                   });


     

   
 
    }

}

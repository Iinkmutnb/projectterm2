var express    = require('express');  
     
var app        = express();                 
var bodyParser = require('body-parser');

//var gapi = require('gapi');



var access = require('./accessDatabase/accessDatabase.js');
var nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 9000; 
var router = express.Router(); 





var router = express.Router();              


router.use(function(req, res, next) {
   
    console.log('Something is happening.');
    next(); 
});



router.route('/showProduct').post(function(req, res) {
    access.querys(req.body.name,res);
});
router.route('/showModal').post(function(req, res) {
    access.showModal(req.body.code,res);
});


router.route('/login').post(function(req, res) {
       access.login(req.body.user,req.body.pass,res)
 });
 router.route('/checkUserPass').post(function(req, res) {
    access.checkUserPass(req.body.user,req.body.email,res)
});
 router.route('/insertusers').post(function(req, res) {
    access.insertUser(req.body.user,req.body.pass,req.body.name,req.body.subName,req.body.email,req.body.phone,req.body.address,res);
});



router.route('/uploadImage').post( function(req, res) {
    access.insertImageProduct(req,res);
}); 

router.route('/checkProduct').post( function(req, res) {
    
    access.checkProduct(req,res,req.body.code,req.body.name,req.body.file);
});
router.route('/insertProduct').post( function(req, res) {
    
    access.insertProduct(req,res,req.body.code,req.body.name,req.body.price,req.body.file,req.body.definition,req.body.type);
});
router.route('/selectOneProduct').post( function(req, res) {
    
    access.selectOneProduct(req,res,req.body.code);
});
router.route('/checkEditProduct').post( function(req, res) {
    
    access.checkEditProduct(req,res,req.body.codeOld,req.body.nameOld,req.body.srcOld,req.body.code,req.body.name,req.body.file);
});
router.route('/editProduct').post( function(req, res) {
    
    access.editProduct(req,res,req.body.codeOld,req.body.code,req.body.name,req.body.price,req.body.file,req.body.definition,req.body.type);
});
router.route('/editUploadImageProduct').post( function(req, res) {
    access.editUploadImageProduct(req,res);
}); 
router.route('/deleteProduct').post( function(req, res) {
    access.deleteProduct(req,res,req.body.code,req.body.Src);
   
});
router.route('/showOfficer').post( function(req, res) {
   
    access.showOffice(req.body.name,res);
   
});
router.route('/checkOfficer').post( function(req, res) {
  
    access.checkOfficer(req,res,req.body.code,req.body.user,req.body.file);
   
});
router.route('/insertOfficer').post( function(req, res) {
    
      access.insertOfficer(req,res,req.body.code,req.body.name,req.body.subname,req.body.file,req.body.address,req.body.user,req.body.pass);
     
  });
  router.route('/insertImageOfficer').post( function(req, res) {
    access.insertImageOfficer(req,res);
}); 
router.route('/selectOneOfficer').post( function(req, res) {

    access.selectOneOfficer(req,res,req.body.code);
});
router.route('/editOfficer').post( function(req, res) {

    access.editOfficer(req,res,req.body.code,req.body.name,req.body.subname,req.body.file,req.body.address,req.body.user,req.body.pass);
});
router.route('/editUploadImageOfficer').post( function(req, res) {
   
    access.editUploadImageOfficer(req,res);
}); 
router.route('/checkEditOfficer').post( function(req, res) {
    
    access.checkEditOfficer(req,res,req.body.userOld,req.body.srcOld,req.body.user,req.body.file);
}); 
router.route('/deleteOfficer').post( function(req, res) {
    
    access.deleteOfficer(req,res,req.body.code,req.body.Src);
});
router.route('/selectOneOfiicerFromUser').post( function(req, res) {
    
    access.selectOneOfiicerFromUser(req,res,req.body.user);
});
router.route('/chageStatusProduct').post( function(req, res) {
   
    access.chageStatusProduct(req,res,req.body.code,req.body.chageStatus);
});
router.route('/chageStatusUser').post( function(req, res) {
    
     access.chageStatusUser(req,res,req.body.code,req.body.chageStatus);
 });
 router.route('/showProductPro').post( function(req, res) {
    
     access.showProductPro(req,res);
 });
 router.route('/detailCustomer').post( function(req, res) {
   
     access.detailCustomer(req,res,req.body.user);
 });
 router.route('/checkUserCustomer').post( function(req, res) {
  
      access.checkUserCustomer(res,req.body.email,req.body.emailOld);
  });
router.route('/editCustomer').post( function(req, res) {
    
        access.editCustomer(res,req.body.user,req.body.pass,req.body.name,req.body.subName,req.body.email,req.body.phone,req.body.address);
});
router.route('/checkEmail').post( function(req, res) {
   
        access.checkEmail(res,req.body.email);
}); 

//var GoogleAuth; // Google Auth object.
//function initClient() {
  /*gapi.client.init({
      'apiKey': 'AIzaSyCB9BlyHuTU2dqoLOGuC_jVg3GvhLQLmJI',
      'clientId': '35329770334-dt827vunvsmrqbkfoa1l2q6tpn0asgjl.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });*/
//}


 router.route('/sentPassInEmail').post( function(req, res) {

    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            //host: 'smtp.gmail.com',
            //port: 465,
            //secure: true, // true for 465, false for other ports
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'thanagon7214@gmail.com', // generated ethereal user
                clientId:'35329770334-dt827vunvsmrqbkfoa1l2q6tpn0asgjl.apps.googleusercontent.com',
                clientSecret:'dAznDQgYmRdnwPnBjVewozog',
                refreshToken:"1/g0ivr0raPUshbU5Nk7d120wm62FvfmWrFWFIUyU3gMM",
                accessToken: 'ya29.GlsjBcBbjSWaNoDF5IzgOtKAmIFvcnFE9Oq9MjI4oYN8ecOTDh4d7HTMTdtivtjZv8_3FXMLhNsB1oHp2cR0j7zJooFpORqDk_QXCdZg8xX79koVw0hZM_3brt-a',
                token_type: "Bearer", 
               //1/hzjYiiJoY7skNVLSQAKAzDOh2fhYeoUt3v7PP7ot-w4
                //ya29.GlsjBYhV7fonhyoVGuYGkLhoB7ky4vbQeADP33OIJu6TVAkbMHcqo7SZ2B3bMEl5iJvDrPEkHU2fuRR1bs9Dk6REreE0jq_Yd03r0h7f3a9JhM7d3g_uoFwXwnpa
                //pass: '0873554569asdf' // generated ethereal password
                
            }
        });
        let mailOptions = {
            from: 'thanagon7214@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: 'รหัสผ่าน Finfrog', // Subject line
            text:req.body.pass, // plain text body
            html: 'รหัสผ่านของคุณคือ'+req.body.pass // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("sds"+error);
            }
            console.log('Message sent: %s', info.messageId);
           
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
           
        });


    });

 });



 router.route('/checkUserFace').post( function(req, res) {
    
        access.checkUserFace(res,req.body.email);
});
router.route('/selectBasket').post( function(req, res) {
    
        access.selectBasket(res,req.body.takeBasket);
});


app.use('/', router);
app.listen(port);
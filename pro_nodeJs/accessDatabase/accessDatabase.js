var querys = require('./showProduct.js');
var showModal = require('./showModal.js');
var login = require('./login.js');
var checkUserPass=require('./checkUserPass.js');
var insertUser=require('./insertUser.js');
var insertImageProduct=require('./insertImageProduct.js');
var checkProduct=require('./checkProduct.js');
var insertProduct=require('./insertProduct.js');
var selectOneProduct=require('./selectOneProduct.js');
var checkEditProduct=require('./checkEditProduct.js');
var editProduct=require('./editProduct.js');
var editUploadImageProduct=require('./editUploadImageProduct.js');
var deleteProduct=require('./deleteProduct.js');
var showOffice=require('./showOffice.js');
var checkOfficer=require('./checkOfficer.js');
var insertOfficer=require('./insertOfficer.js');
var insertImageOfficer=require('./insertImageOfficer.js');
var selectOneOfficer=require('./selectOneOfficer.js');
var editOfficer=require('./editOfficer.js');
var editUploadImageOfficer=require('./editUploadImageOfficer.js');
var checkEditOfficer=require('./checkEditOfficer.js');
var deleteOfficer=require('./deleteOfficer.js');
var selectOneOfiicerFromUser=require('./selectOneOfiicerFromUser.js');
var chageStatusProduct=require('./pageEditAdmin/chageStatusProduct.js');
var chageStatusUser=require('./pageEditAdmin/chageStatusUser.js');
var showProductPro=require('./pageHome/showProductPro.js');
var detailCustomer=require('./pageHome/detailCustomer.js');
var checkUserCustomer=require('./pageHome/checkUserCustomer.js');
var editCustomer=require('./pageHome/editCustomer.js');
var checkEmail=require('./pageHome/checkEmail.js');
var checkUserFace=require('./pageHome/checkUserFace.js');
var selectBasket=require('./pageHome/selectBasket.js');
module.exports={
    querys: function(name,res) {
        querys.querys(name,res);
    },
    showModal:function(code,res) {
        showModal.showModal(code,res);
    },
    login:function(user,pass,res) {
        login.login(user,pass,res);
    },
    checkUserPass:function(user,email,res) {
        checkUserPass.checkUserPass(user,email,res);
    },
    insertUser:function(user,pass,name,subName,email,phone,address,res) {
        insertUser.insertUser(user,pass,name,subName,email,phone,address,res);
    },
    insertImageProduct: function(req,res){
        insertImageProduct.insertImageProduct(req,res);

    },
    checkProduct: function(req,res,code,name,file){
       
        checkProduct.checkProduct(req,res,code,name,file);

    },
    insertProduct: function(req,res,code,name,price,file,definition,type){
        
        insertProduct.insertProduct(req,res,code,name,price,file,definition,type);
 
     },
     selectOneProduct: function(req,res,code){
        
        selectOneProduct.selectOneProduct(req,res,code);
 
     },
     checkEditProduct: function(req,res,codeOld,nameOld,srcOld,code,name,file){
        
        checkEditProduct.checkEditProduct(req,res,codeOld,nameOld,srcOld,code,name,file);
 
     }, 
     editProduct: function(req,res,codeOld,code,name,price,file,definition,type){
        
        editProduct.editProduct(req,res,codeOld,code,name,price,file,definition,type);
 
     },
     editUploadImageProduct: function(req,res){
        editUploadImageProduct.editUploadImageProduct(req,res);

    },
    deleteProduct: function(req,res,code,Src){
        deleteProduct.deleteProduct(req,res,code,Src);

    },
    showOffice: function(name,res){
        showOffice.showOffice(name,res);

    },
    checkOfficer: function(req,res,code,user,file){
        checkOfficer.checkOfficer(req,res,code,user,file);
    },
    insertOfficer: function(req,res,code,name,subname,file,address,user,pass){
        insertOfficer.insertOfficer(req,res,code,name,subname,file,address,user,pass)
    },
    insertImageOfficer: function(req,res){
        insertImageOfficer.insertImageOfficer(req,res);
    },
    selectOneOfficer: function(req,res,code) {
        selectOneOfficer.selectOneOfficer(req,res,code);
    },
    editOfficer: function(req,res,code,name,subname,file,address,user,pass){
        editOfficer.editOfficer(req,res,code,name,subname,file,address,user,pass);
    },
    editUploadImageOfficer: function(req,res) {
        editUploadImageOfficer.editUploadImageOfficer(req,res);
    },
    checkEditOfficer: function(req,res,userOld,srcOld,user,file) {
        checkEditOfficer.checkEditOfficer(req,res,userOld,srcOld,user,file) ;
    },
    deleteOfficer: function(req,res,code,Src) {
        deleteOfficer.deleteOfficer(req,res,code,Src);
    },
    selectOneOfiicerFromUser: function(req,res,user) {
        selectOneOfiicerFromUser.selectOneOfiicerFromUser(req,res,user);
    },
    chageStatusProduct: function(req,res,code,status) {
     
        chageStatusProduct.chageStatusProduct(req,res,code,status);
    },
    chageStatusUser: function(req,res,code,status) {
        
        chageStatusUser.chageStatusUser(req,res,code,status);
    },
    showProductPro: function(req,res) {
        
        showProductPro.showProductPro(req,res);
    },
    detailCustomer: function(req,res,userId) {
        
        detailCustomer.detailCustomer(req,res,userId);
    },
    checkUserCustomer: function(res,email,emailOld) {
        
        checkUserCustomer.checkUserCustomer(res,email,emailOld);
    },
    editCustomer: function(res,user,pass,name,subName,email,phone,address) {
        editCustomer.editCustomer(res,user,pass,name,subName,email,phone,address);
    },
    checkEmail: function(res,email){
        checkEmail.checkEmail(res,email);
    },
    checkUserFace:function(res,email){
        
        checkUserFace.checkUserFace(res,email);
    },
    selectBasket: function(res,takeBasket) {
        selectBasket.selectBasket(res,takeBasket);
     },
}
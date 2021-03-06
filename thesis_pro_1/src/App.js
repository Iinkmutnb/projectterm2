import React, { Component } from 'react';
import HOME from './home/home';
import './App.css';
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import {BrowserRouter,Link,Route,Match} from 'react-router-dom';
import {  Columns ,Column} from 're-bulma';
import PRODUCT from './home/product.js';
import EDIT_ADMIN from './home/editAdmin.js';
import MENU_SIDE from  '././home/head/menuSide.js';
import TAP_MENU from  './home/head/tapMenu.js';
import LOGO from  './home/head/logo.js';
import SLIDE from  './home/head/slide.js';
import LOGIN from  './home/head/login.js';
import REGISTER from './home/head/register.js';
import BUTTON_FACE_LINE from  './home/head/buttonFaceLine.js';
import INSERT_PRODUCT_ADMIN from './home/editAdmin/insert.js';
import MENU_SIDE_ADMIN from './home/editAdmin/menuSide.js';
import TAP_MENU_PRODUCT_ADMIN from './home/editAdmin/tapMenuProduct.js';
import EDIT_PRODUCT_ADMIN from './home/editAdmin/edit.js';
import EDITS_PRODUCT_ADMIN from './home/editAdmin/edits.js';
import DELETE_PRODUCT_ADMIN from './home/editAdmin/deleteProduct.js';
import TAP_MENU_OFFICER_ADMIN from './home/editAdmin/tapMenuOfficer.js';
import INSERT_OFFICER_ADMIN from './home/editAdmin/insertOfficer.js';
import EDIT_OFFICER_ADMIN from './home/editAdmin/editOfficer.js';
import EDITS_OFFICER_ADMIN from './home/editAdmin/editsOfficer.js';
import DELETE_OFFICER_ADMIN from './home/editAdmin/deleteOfficer.js';
import CHAGE_STATUS_PRODUCT from './home/editAdmin/chageStatusProduct.js';
import CHAGE_STATUS_CUSTOMER from './home/editAdmin/chageStatusCustomer.js';
import PRODUCT_PRO from './home/productPro.js';
import PRODUCT_ALL from './home/productAll.js';
import DETAIL_CUSTOMER from './home/detaliCustomer.js';
import EDIT_CUSTOMER from './home/editCustomer.js';
import PAGE_LINE from './home/pageLine.js';
import PAGE_BASKET from './home/home/pageBasket.js'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exact:false,
      exactProdcut:false,
      page:1,
    };
    
  }
  componentWillMount() {
    insertCss(css, { prepend: true });
  
    if(window.location.pathname=="/"){
      this.setState({exact:false})
    }
    if(window.location.pathname=="/register"){
      this.setState({exact:true})
    }
   /* if(window.location.pathname=="/editAdmin/product/insert"){
      this.setState({exact:true,exactProdcut:true,page:2})
    }*/

    
  }
 setExact=(value,value2,page)=>{
   if(page==undefined){
   page=1
   }
 
  this.setState({exact:value,exactProdcut:value2,page:page})
  console.log("page+++"+page)
  if(page!=undefined){
    //window.location.reload();
    }
  //window.location.reload();
 }

  render() {
    console.log("pages:"+this.state.page)
    if(this.state.page==1){
      return (
        <div>
        <BrowserRouter >
       <div>
           <table  style={this.state.exact ? ({}):({padding:'0px',marginButtom:'0 px',border:'1px solid #C8C8C8',background:'linear-gradient(to bottom, #bfbfbf 0%, #ffffff 100%)',width:'100%'})}>
             <tr>
             <td style={{width:'45%'}}>
               
               <Route path='/'  exact={this.state.exact} component={LOGO}/>
             </td>

             <td >
               <Route path='/'  exact={this.state.exact} component={SLIDE}/>
             </td>
             </tr>
           </table>
       
           <table style={{marginTop:'0px',padding:'0px',width:'100%'}} >
           <tr  >
             <td style={{width: '20%',verticalAlign: 'top'}} >
            
              
              
                 <Route path='/' exact={this.state.exact}  component={MENU_SIDE} />
                     
           
          
             </td>
         
             <td    >
             
                 <div style={{ position: 'sticky', top:'0px',zIndex: '99'}}>
                 <Route path='/' exact={this.state.exact}   render={(props) => <TAP_MENU setExact={this.setExact}/>}   />
                 </div>
               <Column  context="isChild" > 
               <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
               </Column>
             
               <Column  context="isChild" >
               
                 <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
                 <Route path='/' exact={this.state.exactProdcut} render={(props) => <PRODUCT setExact={this.setExact}/>}  />
                 <Route path='/productPro'  render={(props) => <PRODUCT_PRO  setExact={this.setExact}/>}  /> 
                 <Route path='/pageLine'  render={(props) => <PAGE_LINE setExact={this.setExact}/>}  />
                 <Route path='/pageBasket'  render={(props) => <PAGE_BASKET setExact={this.setExact}/>}  />
                 <Route path='/productAll:type'  render={(props) => <PRODUCT_ALL {...props} setExact={this.setExact}/>}  />  
                 <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
                 <Route path='/detaliCustomer'   render={(props) => <DETAIL_CUSTOMER setExact={this.setExact}/>} />
                 <Route path='/editCustomer'   render={(props) => <EDIT_CUSTOMER setExact={this.setExact}/>} />
                 <Route path='/editAdmin'   render={(props) => <EDIT_ADMIN setExact={this.setExact}/>} />
                 <Route path='/editAdmin/product'   render={(props) => <TAP_MENU_PRODUCT_ADMIN setExact={this.setExact}/>} />
                 <Route path='/editAdmin/product/insert'   render={(props) => <INSERT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                 <Route path='/editAdmin/product/edit'   render={(props) => <EDIT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                 <Route path='/editAdmin/product/delete'   render={(props) => <DELETE_PRODUCT_ADMIN setExact={this.setExact}/>} />
                 <Route path='/editAdmin/product/edits:code'   render={(props) => <EDITS_PRODUCT_ADMIN {...props}  setExact={this.setExact}/>} />
                 
                 <Route path='/editAdmin/officer/insertOfficer'   render={(props) => <INSERT_OFFICER_ADMIN setExact={this.setExact}/>} />
                         <Route path='/editAdmin/officer/editOfficer'   render={(props) => <EDIT_OFFICER_ADMIN setExact={this.setExact}/>} />
                         
                         <Route path='/editAdmin/officer/deleteOfficer'   render={(props) => <DELETE_OFFICER_ADMIN  setExact={this.setExact}/>} />
                         <Route path='/editAdmin/officer/editsOfficer:code'   render={(props) => <EDITS_OFFICER_ADMIN {...props}   setExact={this.setExact}/>} />                
                       
               </Column>
           
             </td>
            </tr>
           </table >
           
          </div>
           </BrowserRouter >
        </div>

      );

    }
    else if(this.state.page==2){
      return (
        <div>
         
         <BrowserRouter >
         <div>
         
        <Route path='/' exact={this.state.exact}  render={(props) => <LOGIN setExact={this.setExact}/>} />
        <Route path='/'  exact={this.state.exact} component={LOGO}/>
        <Route path='/'  exact={this.state.exact} component={SLIDE}/>
        
        <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
        <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
        <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
        <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
        <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
        <Route path='/detaliCustomer'   render={(props) => <DETAIL_CUSTOMER setExact={this.setExact}/>} />
        <Route path='/editCustomer'   render={(props) => <EDIT_CUSTOMER setExact={this.setExact}/>} />
        <Route path='/productPro'  render={(props) => <PRODUCT_PRO setExact={this.setExact}/>}  />
        <Route path='/pageLine'  render={(props) => <PAGE_LINE setExact={this.setExact}/>}  />
         <Route path='/pageBasket'  render={(props) => <PAGE_BASKET setExact={this.setExact}/>}  />
        <Route path='/productAll:type'  render={(props) => <PRODUCT_ALL {...props} setExact={this.setExact}/>}  />  
        <Route path='/editAdmin'   render={(props) => <EDIT_ADMIN setExact={this.setExact}/>} />
        <Columns>
                    <Column size="is2" style={{width:'260px'}}>
                    <Route path='/editAdmin'   render={(props) => <MENU_SIDE_ADMIN setExact={this.setExact}/>} />
                    </Column>
                    <Column>
                      <Column  style={{padding:'10px 1px 0px 5px'}}>
                      <Route path='/editAdmin/product'    render={(props) => <TAP_MENU_PRODUCT_ADMIN setExact={this.setExact}/>} />
                      <Route path='/editAdmin/officer'   render={(props) => <TAP_MENU_OFFICER_ADMIN setExact={this.setExact}/>} />
                      </Column>
                      <Column style={{marginTop:'0px',padding:'0px 1px 1px 5px'}}>
                        <Route path='/editAdmin/product/insert'   render={(props) => <INSERT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                        <Route path='/editAdmin/product/edit'   render={(props) => <EDIT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                        <Route path='/editAdmin/product/delete'   render={(props) => <DELETE_PRODUCT_ADMIN setExact={this.setExact}/>} />
                        <Route path='/editAdmin/product/edits:code'   render={(props) => <EDITS_PRODUCT_ADMIN {...props}  setExact={this.setExact}/>} />
                        <Route path='/editAdmin/product/chageStatusProduct'   render={(props) => <CHAGE_STATUS_PRODUCT setExact={this.setExact}/>} />
                        
                        <Route path='/editAdmin/officer/insertOfficer'   render={(props) => <INSERT_OFFICER_ADMIN setExact={this.setExact}/>} />
                        <Route path='/editAdmin/officer/editOfficer'   render={(props) => <EDIT_OFFICER_ADMIN setExact={this.setExact}/>} />
                        
                        <Route path='/editAdmin/officer/deleteOfficer'   render={(props) => <DELETE_OFFICER_ADMIN  setExact={this.setExact}/>} />
                        <Route path='/editAdmin/officer/editsOfficer:code'   render={(props) => <EDITS_OFFICER_ADMIN {...props}  setExact={this.setExact}/>} />
                        <Route path='/editAdmin/officer/chageStatusCustomer'   render={(props) => <CHAGE_STATUS_CUSTOMER setExact={this.setExact}/>} />
                        
                      </Column>
                    </Column>
                   
        </Columns>
        </div>
        </BrowserRouter >
       </div>
      );
    }
  else if(this.state.page==3){ return (<div>sss</div>)}

  
  }
}

export default App;

/*
return (
      <div  >
       <BrowserRouter >
       {this.state.exact ? (
         <div>
          
          <Route path='/' exact={this.state.exact}  render={(props) => <LOGIN setExact={this.setExact}/>} />
          <Route path='/'  exact={this.state.exact} component={LOGO}/>
          <Route path='/'  exact={this.state.exact} component={SLIDE}/>
          
          <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
          <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
          <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
          <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
          <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
          <Route path='/detaliCustomer'   render={(props) => <DETAIL_CUSTOMER setExact={this.setExact}/>} />
          <Route path='/editCustomer'   render={(props) => <EDIT_CUSTOMER setExact={this.setExact}/>} />
          <Route path='/productPro'  render={(props) => <PRODUCT_PRO setExact={this.setExact}/>}  />
          <Route path='/pageLine'  render={(props) => <PAGE_LINE setExact={this.setExact}/>}  />
           <Route path='/pageBasket'  render={(props) => <PAGE_BASKET setExact={this.setExact}/>}  />
          <Route path='/productAll:type'  render={(props) => <PRODUCT_ALL {...props} setExact={this.setExact}/>}  />  
          <Route path='/editAdmin'   render={(props) => <EDIT_ADMIN setExact={this.setExact}/>} />
          <Columns>
                      <Column size="is2" style={{width:'260px'}}>
                      <Route path='/editAdmin'   render={(props) => <MENU_SIDE_ADMIN setExact={this.setExact}/>} />
                      </Column>
                      <Column>
                        <Column  style={{padding:'10px 1px 0px 5px'}}>
                        <Route path='/editAdmin/product'   render={(props) => <TAP_MENU_PRODUCT_ADMIN setExact={this.setExact}/>} />
                        <Route path='/editAdmin/officer'   render={(props) => <TAP_MENU_OFFICER_ADMIN setExact={this.setExact}/>} />
                        </Column>
                        <Column style={{marginTop:'0px',padding:'0px 1px 1px 5px'}}>
                          <Route path='/editAdmin/product/insert'   render={(props) => <INSERT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                          <Route path='/editAdmin/product/edit'   render={(props) => <EDIT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                          <Route path='/editAdmin/product/delete'   render={(props) => <DELETE_PRODUCT_ADMIN setExact={this.setExact}/>} />
                          <Route path='/editAdmin/product/edits:code'   render={(props) => <EDITS_PRODUCT_ADMIN {...props}  setExact={this.setExact}/>} />
                          <Route path='/editAdmin/product/chageStatusProduct'   render={(props) => <CHAGE_STATUS_PRODUCT setExact={this.setExact}/>} />
                          
                          <Route path='/editAdmin/officer/insertOfficer'   render={(props) => <INSERT_OFFICER_ADMIN setExact={this.setExact}/>} />
                          <Route path='/editAdmin/officer/editOfficer'   render={(props) => <EDIT_OFFICER_ADMIN setExact={this.setExact}/>} />
                          
                          <Route path='/editAdmin/officer/deleteOfficer'   render={(props) => <DELETE_OFFICER_ADMIN  setExact={this.setExact}/>} />
                          <Route path='/editAdmin/officer/editsOfficer:code'   render={(props) => <EDITS_OFFICER_ADMIN {...props}  setExact={this.setExact}/>} />
                          <Route path='/editAdmin/officer/chageStatusCustomer'   render={(props) => <CHAGE_STATUS_CUSTOMER setExact={this.setExact}/>} />
                          
                        </Column>
                      </Column>
                     
          </Columns>
          
          
         </div>):
         (
         <div>
         
            <Columns  style={this.state.exact ? ({}):({border:'1px solid #C8C8C8',borderRadius: '12px',background:'linear-gradient(to bottom, #bfbfbf 0%, #ffffff 100%)'})}>
              <Column >
                <Route path='/'  exact={this.state.exact} component={LOGO}/>
              </Column>

              <Column >
                <Route path='/'  exact={this.state.exact} component={SLIDE}/>
              </Column>
            </Columns>
        
            <Columns >
              <Column  size="isOneQuarter" context="isParent" isVertical >
                <Column  context="isChild">
                  <Route path='/' exact={this.state.exact}  render={(props) => <LOGIN setExact={this.setExact}/>}/>
                </Column>
                <Column  context="isChild" style={{padding:' 0px'}} >
                  <Route path='/' exact={this.state.exact}  component={MENU_SIDE}/>
                      
                </Column>
           
              </Column>
          
              <Column  context="isParent" isVertical >
              
                  <div style={{ position: 'sticky', top:'0px',zIndex: '99'}}>
                  <Route path='/' exact={this.state.exact}   component={TAP_MENU}/>
                  </div>
                <Column  context="isChild" > 
                <Route path='/' exact={this.state.exact}   component={BUTTON_FACE_LINE}/>
                </Column>
              
                <Column  context="isChild" >
                
                  <Route path='/product'  render={(props) => <PRODUCT setExact={this.setExact}/>}  />
                  <Route path='/' exact={this.state.exactProdcut} render={(props) => <PRODUCT setExact={this.setExact}/>}  />
                  <Route path='/productPro'  render={(props) => <PRODUCT_PRO  setExact={this.setExact}/>}  /> 
                  <Route path='/pageLine'  render={(props) => <PAGE_LINE setExact={this.setExact}/>}  />
                  <Route path='/pageBasket'  render={(props) => <PAGE_BASKET setExact={this.setExact}/>}  />
                  <Route path='/productAll:type'  render={(props) => <PRODUCT_ALL {...props} setExact={this.setExact}/>}  />  
                  <Route path='/register'   render={(props) => <REGISTER setExact={this.setExact}/>} />
                  <Route path='/detaliCustomer'   render={(props) => <DETAIL_CUSTOMER setExact={this.setExact}/>} />
                  <Route path='/editCustomer'   render={(props) => <EDIT_CUSTOMER setExact={this.setExact}/>} />
                  <Route path='/editAdmin'   render={(props) => <EDIT_ADMIN setExact={this.setExact}/>} />
                  <Route path='/editAdmin/product'   render={(props) => <TAP_MENU_PRODUCT_ADMIN setExact={this.setExact}/>} />
                  <Route path='/editAdmin/product/insert'   render={(props) => <INSERT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                  <Route path='/editAdmin/product/edit'   render={(props) => <EDIT_PRODUCT_ADMIN setExact={this.setExact}/>} />
                  <Route path='/editAdmin/product/delete'   render={(props) => <DELETE_PRODUCT_ADMIN setExact={this.setExact}/>} />
                  <Route path='/editAdmin/product/edits:code'   render={(props) => <EDITS_PRODUCT_ADMIN {...props}  setExact={this.setExact}/>} />
                  
                  <Route path='/editAdmin/officer/insertOfficer'   render={(props) => <INSERT_OFFICER_ADMIN setExact={this.setExact}/>} />
                          <Route path='/editAdmin/officer/editOfficer'   render={(props) => <EDIT_OFFICER_ADMIN setExact={this.setExact}/>} />
                          
                          <Route path='/editAdmin/officer/deleteOfficer'   render={(props) => <DELETE_OFFICER_ADMIN  setExact={this.setExact}/>} />
                          <Route path='/editAdmin/officer/editsOfficer:code'   render={(props) => <EDITS_OFFICER_ADMIN {...props}   setExact={this.setExact}/>} />                
                        
                </Column>
            
              </Column>
             
            </Columns >
           
         </div>
         )
       }
       
                </BrowserRouter >
      </div>
    );


*/



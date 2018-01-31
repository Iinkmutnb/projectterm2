import React, { Component } from 'react';
import queryString from 'query-string';
import cookie from 'react-cookies';
import {Content,Table,Thead,Tr,Th,Tbody,Td,Hero,HeroHead,Nav,Container,NavGroup,HeroBody,Box,Textarea,Button,Columns,Column,Group,Notification}  from 're-bulma';
import {Link} from 'react-router-dom';

class pageBasket extends Component {
    constructor(props) {
      super(props);
      this.state = {
        productBasket:'',
        countBasket:0,
        totalBasket:0,
       
      };
     
     
    }
    
    componentWillMount() {
     
      this.props.setExact(false,true);

      var takeBasket= cookie.load('takeBasket');
      if(takeBasket!=null){
      this.setState({countBasket:takeBasket.length})
    
      fetch('http://localhost:9000/selectBasket', {
        headers: {
                  'Content-Type':'application/x-www-form-urlencoded'
      
                 },
     
     
         method: "POST",
         body:  queryString.stringify({'takeBasket':takeBasket})
        
       
     })
     .then((response) => response.json())   
     .then((data) => {
    console.log(data)
      this.setState({productBasket: data})
      var total=0;
      data.map((product) =>{total +=  product.Price});
      this.setState({totalBasket: total})
     
      })
    }

   
    }

  

 render() {
      
        return (
        <div >
          
          <Content>
   
                          <Container hasTextCentered>
                            <h1>ตระกร้าสินค้า</h1>
                          </Container>
                          </Content>
                             
                              {this.state.productBasket!=''?(<div >  <table  style={{float: 'left'}}>
  <tr style={{height:'50px'}}><td style={{ textAlign:'center', verticalAlign:'middle' }}>{this.state.countBasket} ชิ้น</td><td></td><td style={{width:'100px',  textAlign:'center', verticalAlign:'middle' }}>ราคา </td>
                                  <td style={{width:'100px',  textAlign:'center', verticalAlign:'middle' }}>จำนวน</td></tr>                   
                                {this.state.productBasket.map((product,key) =>  <tr style={{marginBottom:'150px'}}>                       
                                    <td><img style={{width:'200px',height:'150px'}} src={require('../../home/picture/product/'+product.Src)} alt="item1" /></td>
                                   <td style={{width:'300px',  textAlign:'center', verticalAlign:'middle' }}>{product.name}<br/>{product.Des}</td>
                                   <td style={{width:'100px',  textAlign:'center', verticalAlign:'middle' }}>{product.Price}</td>
                                   <td style={{width:'100px',  textAlign:'center', verticalAlign:'middle' }}>1 ชิ้น</td>
                                                       </tr>  
                                )}
                                  </table>
                                  <Table isStriped style={{width:'300px',marginTop:'11px',float: 'left'}}>
                                  <Thead>
                                    <Tr>
                                      <Th style={{color:'black'}}>สรุปการสั่งซื้อ</Th>
                                      <Th></Th>
                                    </Tr>
                                  </Thead>
                                  <Tbody>
                                    <Tr>
                                      <Td style={{color:'grey'}}>มูลค่าการสั่งซื้อ</Td>
                                      <Td>{this.state.totalBasket} ฿</Td>
                                    </Tr>
                                    <Tr>
                                    <Td>ยอดสุทธิ</Td>
                                      <Td>{this.state.totalBasket} ฿</Td>
                                    </Tr>
                                    
                                  </Tbody>
                                </Table>
                                <Button color="isDanger" style={{marginLeft:'20px',width:'220px'}} >ดำเนินการชำระเงิน</Button> 
                                  </div>):
                              (<div><h3>ยังไม่มีสินค้าในตระกร้าสินค้า</h3></div>)}
                              
                         
            
       
       
       
         </div>
                )}}

export default pageBasket;

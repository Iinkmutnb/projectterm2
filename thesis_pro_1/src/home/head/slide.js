import React, { Component } from 'react';
import {ApSlideshow, ApSlideshowStyle} from 'apeman-react-slideshow';
var image1 = require('/home/benzdevubuntu/project/thesis_pro_1/src/img/home/s1.jpg')
var image2 = require('/home/benzdevubuntu/project/thesis_pro_1/src/img/home/proIn3.png')
var image3 = require('/home/benzdevubuntu/project/thesis_pro_1/src/img/home/proIn2.png')
const height_head={ height:'150px',width:'200px' };
const slide =()=> <div>
                     
                        <img style={height_head} src={require('../../img/home/logofin.png')} />
                  </div>
export default slide;
/*
   <ApSlideshowStyle />
                        <ApSlideshow images={[
                                                image1,
                                                image2,
                                                image3,
                                             ]}
                                    repeat={ true }
                                    width={ 600 }
                                    height={ 100 }
                        />
*/ 
import React, { useState } from 'react'
import { Restaurants } from '../../../Constants/Restaurants';
import 'react-slideshow-image/dist/styles.css';
import './StyledSlider.ts'
import { ResComponent, SlideContainer, SlideDesktopContainer } from './StyledSlider';
import SetWindowSize from '../../../helpers/setWindowSize';
import { useSelector } from 'react-redux';
import { IRestaurant } from '../../Intefaces/IRestaurant';



const SliderOfRestaurants=()=>{
  const windowSize = SetWindowSize();
  const restaurants = useSelector((state:any) => state.restaurants.value);
 
  
    
 return <>
   {windowSize<600?
      <SlideContainer>
        {restaurants.map((restaurant:IRestaurant, index:any) => (
            <ResComponent key={index}>
              <img src={restaurant.image} /><br/><br/>
              <div>{restaurant.name}</div><br/>
              <span>{restaurant.chef}</span><br/><br/>
            </ResComponent>
        ))}
      </SlideContainer>
      :
      <SlideDesktopContainer>
        {restaurants.map((restaurant:IRestaurant, index:any) => (
            <ResComponent key={index}>
              <img src={restaurant.image} /><br/><br/>
              <div>{restaurant.name}</div><br/>
              <span>{restaurant.chef}</span><br/><br/>
              <img style={{height:'20%',width:'50%'}} src={restaurant.rating} /><br/><br/>
            </ResComponent>
        ))}
      </SlideDesktopContainer>
}

</>
}
export default SliderOfRestaurants;
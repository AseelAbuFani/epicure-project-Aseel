import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Dishes } from '../../Constants/Dishes';
import SetWindowSize from '../../helpers/setWindowSize';
import { IDish } from '../Intefaces/IDish';
import { ResComponent, SlideContainer, SlideDesktopContainer } from './SliderOfAllRestaurants/StyledSlider';



const SliderOfDishes=()=>{
  const windowSize = SetWindowSize();
  const dishes = useSelector((state:any) => state.dishes.value);
  const ThreeDishes = dishes.filter((dish:IDish) => {
    return (dish.name === "Pad Ki Mao" || dish.name === 'Garbanzo Frito'|| dish.name === 'Smoked Pizza');
  });
  
    
 return <>
   {windowSize<600?
      <SlideContainer>
        {dishes.map((dish:IDish, index:any) => (
            <ResComponent key={index}>
              <img src={dish.image} /><br/><br/>
              <div>{dish.name}</div>
              <p>{dish.description}</p>
              <img style={{width:'10%',height:'10%',paddingLeft:'10%'}} src={dish.signature}/><br/><br/>
              <div>{dish.price}</div><br/>
            </ResComponent>
        ))}
      </SlideContainer>
      :
      <SlideDesktopContainer>
         {ThreeDishes.map((dish:IDish, index:any) => (
            <ResComponent key={index}>
              <img src={dish.image} /><br/><br/>
              <div>{dish.name}</div><br/>
            </ResComponent>
        ))}
      </SlideDesktopContainer>
}

</>
}
export default SliderOfDishes;
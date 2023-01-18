import React from 'react';
import { FlexContainerRow } from '../../../Components/Header/Header.styled';
import RestaurantsPage from '../../../Components/Slider/SliderOfAllRestaurants/RestaurantSlider';
import Search from '../../../assets/SearchIcon.png'
import toRight from '../../../assets/toRight.png'
import Yossi from '../../../assets/Chefs/yossi.png'
import { ButtonOfAll, HomeSearchBar, SubtitleInHomePage } from './HomePage.styled';
import RestaurantSlider from '../../../Components/Slider/SliderOfAllRestaurants/RestaurantSlider';
import { StyledBurger } from '../../../Components/Icons/Burger/Burger.styled';
import { SignatureBurger } from '../../../Components/Icons/SignatureBurger/Signature.styled';
import Signature from '../../../Components/Icons/SignatureBurger/Signature';
import Chef from '../../../Components/Chef/Chef';
import RestaurantsForYossi from '../../../Components/Slider/SliderOfYossiRes/YossiResSlider';
import MobileBottom from '../../../Components/BottomPart/Bottom';
import { MobileBottomPart } from '../../../Components/BottomPart/Bottom.styled';
import Bottom from '../../../Components/BottomPart/Bottom';
import SearchBar from '../../../Components/SerachBar/SearchComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import SliderOfAllDishes from '../../../Components/Slider/SliderOfAllDishes';

const HomePageMobile = () =>{
   const navigte = useNavigate();
   const navigateToAllRes=()=>{navigte('/AllRestaurantsMobile')}
   const navigateToAllDishes=()=>{navigte('/AllDishesMobile')}
   const { state } = useLocation();
    return(
        <>
        {state}
        <br/>
            <HomeSearchBar>
                <div>Epicure works with the top <br/> chef restaurants in Tel Aviv <br/>
                    <SearchBar/>
                </div> 
                        <br/><br/><br/><br/>
            </HomeSearchBar>
            <SubtitleInHomePage>popular restaurant in epicure:</SubtitleInHomePage><br/>
            <RestaurantSlider/><br/>
            <FlexContainerRow>
                <ButtonOfAll onClick={navigateToAllRes}>
                    All restaurants
                    <img style={{height:'10px',marginTop:'2.5%'}} src={toRight}></img>
                </ButtonOfAll>
            </FlexContainerRow>
            <SubtitleInHomePage>Signature Dish Of:</SubtitleInHomePage>
            <SliderOfAllDishes/><br/>
            <FlexContainerRow>
                <ButtonOfAll onClick={navigateToAllDishes}>
                    All Dishes
                    <img style={{height:'10px',marginTop:'2.5%'}} src={toRight}></img>
                </ButtonOfAll>
            </FlexContainerRow>
            <br/><br/>
            <Signature/>
            <br/><br/>
            <SubtitleInHomePage>Chef of the week:</SubtitleInHomePage>
            <Chef/>
            <SubtitleInHomePage>Yossi’s Restaurants:</SubtitleInHomePage>
            <RestaurantsForYossi/><br/>
            <FlexContainerRow>
                <ButtonOfAll onClick={navigateToAllRes}>
                    All restaurants&nbsp;
                    <a><img style={{height:'10px',marginTop:'2.5%'}} src={toRight}></img></a>
                </ButtonOfAll>
            </FlexContainerRow>
            <Bottom/>
            <br/><br/>
        </>

    )
}

export default HomePageMobile;
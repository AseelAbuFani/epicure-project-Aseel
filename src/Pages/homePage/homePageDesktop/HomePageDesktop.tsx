import React from 'react';
import { FlexContainerRow, FlexContainerRowS } from '../../../Components/Header/Header.styled';
import RestaurantsPage from '../../../Components/Slider/SliderOfAllRestaurants/RestaurantSlider';
import Search from '../../../assets/search.png'
import toRight from '../../../assets/toRight.png'
import { ButtonOfAll, HomeSearchBar, SubtitleInHomePage, SubtitleToChef } from '../homePageMobile/HomePage.styled';
import Signature from '../../../Components/Icons/SignatureBurger/Signature';
import Chef from '../../../Components/Chef/Chef';
import RestaurantsForYossi from '../../../Components/Slider/SliderOfYossiRes/YossiResSlider';
import Bottom from '../../../Components/BottomPart/Bottom';
import SearchBar from '../../../Components/SerachBar/SearchComponent';
import SearchComponent from '../../../Components/SerachBar/SearchComponent';
import RestaurantSlider from '../../../Components/Slider/SliderOfAllRestaurants/RestaurantSlider';
import { useNavigate } from 'react-router-dom';
const HomePageDesktop = () =>{
    const navigte = useNavigate();
   const navigateToAllRes=()=>{navigte('/AllRestaurantsDesktop')}
   
 return(
    <>
        <HomeSearchBar>
            <br/>
            <div >Epicure works with the top <br/> chef restaurants in Tel Aviv <br/>
                <SearchComponent/>
            </div>
        </HomeSearchBar>
        <SubtitleInHomePage>popular restaurant in epicure:</SubtitleInHomePage>
        <RestaurantSlider/>
        <FlexContainerRowS>
                <ButtonOfAll onClick={navigateToAllRes}>
                    All restaurants&nbsp;
                    <img src={toRight}></img>
                </ButtonOfAll>
        </FlexContainerRowS>
        <SubtitleInHomePage>SIGNATURE DISH OF:</SubtitleInHomePage>
        <Signature/>
        <SubtitleInHomePage>Chef of the week:</SubtitleInHomePage>
        <Chef/>
        <SubtitleToChef>Yossi’s Restaurants</SubtitleToChef>
        <RestaurantsForYossi/><br/>
        <Bottom/>
   
        </>

    )
}

export default HomePageDesktop;
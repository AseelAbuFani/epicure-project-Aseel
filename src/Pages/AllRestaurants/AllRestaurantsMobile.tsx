import './resStyle.css'
import { ColResComponent, Column, Title } from "../AllRestaurants/Restaurants.Styled";
import popular from '../../assets/Rating/four.png';
import { IRestaurant } from "../../Components/Intefaces/IRestaurant";
import { useSelector } from "react-redux";
import { Restaurants } from "../../Constants/Restaurants";
import { useLocation, useNavigate } from "react-router-dom";
import openNow from "../../assets/openNow.png"
import { sliceCloseHoure, sliceOpenHoure } from "../../helpers/Slicers";


export default function AllRestaurantsMobile({parentToChild}:any) {
  
    const navigate = useNavigate();
    const handleClick = (res:any) => {
      navigate('/SpecificRestaurant', { state: res});
    };
    const current = new Date();
    const date = `${current.getHours()}`;
  
  const restaurants = useSelector((state:any) => state.restaurants.value);

  const NewRes = restaurants.filter((res:any) => {
    return res.name === "Claro - U.S" || res.name === 'Kab Kem - U.S'|| res.name === 'Messa - U.S';
  });
  const PopularRes = restaurants.filter((res:any) => {
    return res.rating=== popular;
  });
  const OpenRes = restaurants.filter((res:any) => {
    return sliceOpenHoure(res.open)<=date&&date<=sliceCloseHoure(res.open)
  });

  return (
    <>
    <Title>Restaurants</Title>

     <div className="tabs">
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">All</label>
        <div className="tabs__content">
        <Column>
          {restaurants.map((restaurant:IRestaurant, index:any) => (
              <ColResComponent key={index}>
                <img src={restaurant.image} onClick={() => {handleClick(restaurant)}}/>
                <div>{restaurant.name}</div>
                <span>{restaurant.chef}</span>
              </ColResComponent>
          ))}
        </Column>
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">New</label>
        <div className="tabs__content">
        <Column>
        {NewRes.map((restaurant:IRestaurant, index:any) => (
            <ColResComponent key={index}>
              <img src={restaurant.image} onClick={() => {handleClick(restaurant)}}/>
              <div>{restaurant.name}</div>
              <span>{restaurant.chef}</span>
        </ColResComponent>
        ))}
      </Column>
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
        <label htmlFor="tab3" className="tabs__label">Most Popular</label>
        <div className="tabs__content">
        <Column>
        {PopularRes.map((restaurant:IRestaurant, index:any) => (
            <ColResComponent key={index}>
              <img src={restaurant.image} onClick={() => {handleClick(restaurant)}}/>
              <div>{restaurant.name}</div>
              <span>{restaurant.chef}</span>
        </ColResComponent>
        ))}
      </Column>
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab4" />
        <label htmlFor="tab4" className="tabs__label">Open</label>
        <div className="tabs__content">
        <Column>
        {OpenRes.map((restaurant:IRestaurant, index:any) => (
            <ColResComponent key={index}>              
              <img src={restaurant.image} onClick={() => {handleClick(restaurant)}}/>
              <div>{restaurant.name}</div>
              <span>{restaurant.chef}</span>
              <img style={{width:"25%",paddingLeft:'3%',marginLeft:'45%'}} src={openNow}/>
        </ColResComponent>
        ))}
      </Column>
        </div>
      </div>
  </>
  )
}

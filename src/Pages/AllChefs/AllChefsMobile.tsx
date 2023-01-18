import { ColResComponent, Column, Title } from "../AllRestaurants/Restaurants.Styled";
import '../AllRestaurants/resStyle.css'
import { Restaurants } from "../../Constants/Restaurants";
import { ChefStyled } from "../../Components/Chef/Chef.styled";
import { useEffect, useState } from "react";
import { IChef } from "../../Components/Intefaces/IChef";
import { useSelector } from "react-redux";
import { Chefs } from "../../Constants/Chefs";

export default function AllChefsMobile() {
  const chefs = useSelector((state:any) => state.chefs.value);
  const NewChef = chefs.filter((chef:IChef) => {
    return chef.name === "Assaf Granit" || chef.name === 'Aviv Moshe'|| chef.name === 'Eyal Shani'|| chef.name === 'Meir Adoni'|| chef.name === 'Omer Miller'|| chef.name === 'Shahaf Shabtay';
  });
  const ViewdChef = chefs.filter((chef:IChef) => {
    return chef.name === "Assaf Granit" || chef.name === 'Aviv Moshe'|| chef.name === 'Eyal Shani';
  });
  return (
    <>
    <Title>Chefs</Title>
     <div className="tabs">
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">All</label>
        <div className="tabs__content">
          {chefs.map((chef:IChef, index:number) => (
              <ChefStyled key={index}><br/>
                <img src={chef.chefImage} />
                <div>{chef.name}</div>
              </ChefStyled>
          ))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">New</label>
        <div className="tabs__content">
        {NewChef.map((chef:IChef, index:any) => (
            <ChefStyled key={index}><br/>
              <img src={chef.chefImage} />
              <div >{chef.name}</div>
            </ChefStyled>
        ))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
        <label htmlFor="tab3" className="tabs__label">Most Viewd</label>
        <div className="tabs__content">
          {ViewdChef.map((chef:IChef, index:any) => (
              <ChefStyled key={index}><br/>
                <img src={chef.chefImage} />
                <div>{chef.name}</div>
              </ChefStyled>
          ))}
        </div>
        
      </div >
  
  </>
  )
}

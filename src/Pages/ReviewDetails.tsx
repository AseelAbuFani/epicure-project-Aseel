import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ColResComponent } from "./AllRestaurants/Restaurants.Styled";
function ReviewDetails() {
  const dishes = useSelector((state:any) => state.dishes.value);

    const { state } = useLocation();
    return (<>
        
        <img style={{width:'100%'}} src={state.image} />
        <div>{state.name}</div>
        <span>{state.chef}</span><br/><br/>
        <div className="tabs">
        <input  type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">Breakfast</label>
        <div className="tabs__content"><br/>
        {(state.dishesRestaurant).map((dishRes:any)=>dishes.map((dish:any)=>dish._id==dishRes?
              <ColResComponent  ><br/>
              <img src={dish.image} />
              <div >{dish.name}</div>
              <p >{dish.description}</p>
              <div>₪{dish.price}</div>
            </ColResComponent>
              :""))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">Lanch</label>
        <div className="tabs__content">
        {(state.dishesRestaurant).map((dishRes:any)=>dishes.map((dish:any)=>dish._id==dishRes?
              
              <ColResComponent>
        <img src={dish.image} />
              <div>{dish.name}</div>
            </ColResComponent>
              :""))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
        <label htmlFor="tab3" className="tabs__label">Dinner</label>
        <div className="tabs__content">
        {(state.dishesRestaurant).map((dishRes:any)=>dishes.map((dish:any)=>dish._id==dishRes?
              
              <ColResComponent>
        <img src={dish.image} />
              <div>{dish.name}</div>
            </ColResComponent>
              :""))}
        </div>
        
      </div >
        
                  
       
      </>
      
    );
  }

export default ReviewDetails;
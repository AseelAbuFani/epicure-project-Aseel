import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Close from '../../assets/CloseIcon.png'
import { ColResComponent } from "../AllRestaurants/Restaurants.Styled";
import { Restaurant } from "../SpecificDish/Dish.style";
function SpecificRestaurant() {
  const dishes = useSelector((state:any) => state.dishes.value);

  const navigate = useNavigate();
  const handleClick = (res:any) => {
    navigate('/SpecificDish', { state: res });
  };
    const { state } = useLocation();
    return (<>
        <img style={{height:'20px'}} src={Close} onClick={() => navigate(-1)}/>
        <img style={{width:'100%',paddingTop:'2%'}} src={state.image} />
        <Restaurant>
        <div>{state.name}</div>
        <span>{state.chef}</span><br/><br/>
        </Restaurant>
        <div className="tabs">
        <input  type="radio" className="tabs__radio" name="tabs-example" id="tab1" defaultChecked />
        <label htmlFor="tab1" className="tabs__label">Breakfast</label>
        <div className="tabs__content"><br/>
        {(state.dishesRestaurant).map((dishRes:any)=>dishes.map((dish:any)=>dish._id==dishRes?
              <ColResComponent  ><br/>
              <img src={dish.image} onClick={() => {handleClick(dish)}}/>
              <div >{dish.name}</div>
              <p >{dish.description}</p>
              <div>₪{dish.price}</div>
            </ColResComponent>
              :""))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
        <label htmlFor="tab2" className="tabs__label">Lanch</label>
        <div className="tabs__content"><br/>
        {(state.dishesRestaurant).map((dishRes:any)=>dishes.map((dish:any)=>dish._id==dishRes?
              <ColResComponent><br/>
              <img src={dish.image} />
              <div >{dish.name}</div>
              <p >{dish.description}</p>
              <div>₪{dish.price}</div>
            </ColResComponent>
              :""))}
        </div>
        <input type="radio" className="tabs__radio" name="tabs-example" id="tab3" />
        <label htmlFor="tab3" className="tabs__label">Dinner</label>
        <div className="tabs__content"><br/>
        {(state.dishesRestaurant).map((dishRes:any)=>dishes.map((dish:any)=>dish._id==dishRes?
              <ColResComponent><br/>
              <img src={dish.image} />
              <div >{dish.name}</div>
              <p >{dish.description}</p>
              <div>₪{dish.price}</div>
            </ColResComponent>
              :""))}
        </div>
        
      </div >
        
                  
       
      </>
      
    );
  }

export default SpecificRestaurant;
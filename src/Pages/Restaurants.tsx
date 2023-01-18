import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Close from '../assets/CloseIcon.png'
import { Restaurant } from "./SpecificDish/Dish.style";



    const Restaurants = ()=>{
      const navigate = useNavigate();
      const handleClick = (res:any) => {
        navigate('/Restaurants', { state: res });
      };
        const { state } = useLocation();
    return (<>
        <img style={{height:'20px'}} src={Close} onClick={() => navigate(-1)}/>
        <img style={{width:'100%',paddingTop:'2%'}} src={state.image} />
        <Restaurant>
        <div>{state.name}</div>
        <span>{state.chef}</span><br/><br/>
        <span>{state.open}</span>
        </Restaurant>
        
                  
       
      </>
      
    );
  }

export default Restaurants;
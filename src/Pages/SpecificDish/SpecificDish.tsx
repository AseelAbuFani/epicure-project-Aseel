import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Icons/ProfilePage/ProfilePage.styled";
import Close from '../../assets/CloseIcon.png'
import { Dish } from "./Dish.style";
import { IDish } from "../../Components/Intefaces/IDish";
import { toast } from "react-toastify";
import axios from "axios";
function SpecificDish() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [side, setSide] = useState('');
    const [changes, setChanges] = useState('');
    const [dish, setDish] = useState(state.name);
    const handleAddOne = () => {
      setQuantity(quantity + 1);
   }
   const handleSubtractOne = () => {
    quantity===1?
    setQuantity(1):setQuantity(quantity - 1);

    
 }
 const AddToCart = async () => {
  const args = {dish, quantity, side, changes};
  const resopnse = await axios.post('http://localhost:3001/api/user/order/createOrder', args);
        if (resopnse.data.status === 'failure') {
            toast.error(resopnse.data.message);
            return ;
        };
        navigate('/')
 }

  return(
    <>
    <img style={{height:'20px'}} src={Close} onClick={() => navigate(-1)}/>
    <Dish>
      <img style={{width:'100%',paddingTop:'3%'}} src={state.image} />
        <div>{state.name}</div>
        <span>{state.description}</span><br/><br/>
      <h2>Choose a side</h2>
      <form name="side">
        <label>
          <input name="sideToDish" type="radio" value={"White bread"} onChange={(e) => setSide(e.target.value)}/>White bread
        </label><br/>
        <label>
          <input name="sideToDish" type="radio" value={"Sticky rice"} onChange={(e) => setSide(e.target.value)}/>Sticky rice
        </label>
      </form>
      <h2>Changes</h2>
      <form name="changes">
        <label >
          <input name="changesInDish" type="checkbox" value={"Whithout peanuts"} onChange={(e) => setChanges(changes+(e.target.value))}/>Whithout peanuts
        </label><br/>
        <label >
          <input name="changesInDish" type="checkbox" value={"Sticky Less spicy"} onChange={(e) => setChanges(changes+(e.target.value))}/>Sticky Less spicy
        </label>
      </form>  
      <h2>Quantity</h2>
        <div style={{paddingLeft:'5%'}} className="counter">
          <span onClick={handleSubtractOne}>-</span>
          <input style={{border:"none",width:'10%',textAlign:'center'}}  type="number" value={quantity}/>
          <span onClick={handleAddOne} >+</span>
        </div><br/><br/>
      <Button style={{marginLeft:'0%'}} onClick={AddToCart}>Add to bag</Button><br/><br/>
    </Dish>
    
    </>
  );
      
  }

export default SpecificDish;
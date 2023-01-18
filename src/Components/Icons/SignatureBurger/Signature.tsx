import veg from '../../../assets/veg.png'
import spicy from '../../../assets/spicy.png'
import vegan from '../../../assets/vegan.png'
import { SignatureBurger, SignatureText } from './Signature.styled'
import SetWindowSize from '../../../helpers/setWindowSize'

const Signature  = () => {
    let signature:string="";
    const windowSize = SetWindowSize();
    {windowSize<600?(signature="Signature Dish Of:"):(signature="THE MEANING OF OUR ICONS:")}
   
   return<>    
   <SignatureText><br/>{signature}<br/><br/></SignatureText>
   <SignatureBurger >
        <img src={spicy}/><br/>
        <img src={veg}/><br/>
        <img src={vegan}/><br/>
    </SignatureBurger>
    </>
}



export default Signature;
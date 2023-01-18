import { ChefDescription, ChefStyled } from './Chef.styled'
import Yossi from '../../assets/Chefs/yossi.png'
import SetWindowSize from '../../helpers/setWindowSize';
import { FlexContainerRow, FlexContainerRowS } from '../Header/Header.styled';
import { useNavigate } from 'react-router-dom';

const Chef  = () => {
    const windowSize = SetWindowSize();
    return<>
       {windowSize<600?
        <div>
            <ChefStyled >
                <img src={Yossi}/>
                <div>Yossi Shitrit</div>
            </ChefStyled><br/>
            <ChefDescription>
            Chef Yossi Shitrit&nbsp; has been living and<br/>
            breathing his culinary dreams for more<br/>
            than two decades, &nbsp; including &nbsp; running<br/>
            the kitchen in his first restaurant, &nbsp; the<br/>
            fondly-remembered Violet, &nbsp; located in <br/>
            Moshav&nbsp; Udim. Shitrit's creativity and<br/>
            culinary &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;acumen&nbsp;&nbsp; born&nbsp;&nbsp; of&nbsp;&nbsp;&nbsp; long<br/>
            experience are expressed in the &nbsp; every<br/>
            detail of each and every dish.
            </ChefDescription>
        </div>
        :
        <FlexContainerRow>
            <ChefStyled >
                <img src={Yossi}></img>
                <div>Yossi Shitrit</div>
            </ChefStyled>
            <ChefDescription>
            Chef Yossi Shitrit has been living and breathing his<br/>
            culinary dreams for more than two decades, including<br/>
            running the kitchen in his first restaurant, the fondly-<br/>
            remembered Violet, located in Moshav  Udim. Shitrit's<br/>
            creativity and culinary  acumen born of long experience<br/>
            are expressed in the every detail of each and every dish.<br/>
            </ChefDescription>
        </FlexContainerRow>
        }
    </>
     
}



export default Chef;
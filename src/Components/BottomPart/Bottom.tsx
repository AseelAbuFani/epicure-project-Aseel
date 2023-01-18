import Logo from '../../assets/fullLogo.svg'
import Apple from '../../assets/apple.svg'
import GooglePlay from '../../assets/googlePlayIcon.svg'
import { MobileBottomPart, Icons, DesktopBottomPart, DesktopBottomPart_img } from './Bottom.styled';
import SetWindowSize from '../../helpers/setWindowSize';
import { FlexContainerRow, FlexContainerRowS } from '../Header/Header.styled';

const Bottom  = () => {
    const windowSize = SetWindowSize();
   return<>
        <br/>
        {windowSize<600?
            
            <MobileBottomPart>
                <Icons><br/>
                    <img src={Logo}/><br/><br/>
                    <img src={GooglePlay}/><br/><br/>
                    <img src={Apple}/><br/><br/>
                </Icons>
                <div>About us:</div>
                <span>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit. In a<br/>
                    lacus vel justo fermentum<br/>
                    bibendum non<br/> 
                    eu ipsum. Cras porta malesuada<br/>
                    eros, eget blandit<br/>
                    turpis suscipit at.  Vestibulum sed<br/>
                    massa in magna sodales porta.<br/>
                    Vivamus elit urna,<br/> 
                    dignissim a vestibulum.<br/>
                    Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit. In a<br/>
                    lacus vel justo fermentum<br/>
                    bibendum no<br/>
                    eu ipsum. Cras porta<br/>
                    malesuada eros.<br/>
                </span>
            </MobileBottomPart>
            :
            <FlexContainerRowS>
                <DesktopBottomPart>   
                    <div>About us:</div><br/>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                        elit. In a lacus vel justo fermentum bibendum non<br/> 
                        eu ipsum.&nbsp; Cras porta malesuada eros, eget blandit<br/>
                        &nbsp;turpis suscipit at.&nbsp; Vestibulum sed massa in magna<br/>
                        sodales porta. Vivamus elit urna,<br/> 
                        dignissim a vestibulum.<br/>
                        <br/>
                        Lorem ipsum dolor sit amet,consectetur adipiscing<br/>
                        elit. In a lacus vel justo fermentum bibendum no<br/>
                        eu ipsum. Cras porta malesuada eros.<br/><br/>
                        <FlexContainerRow>
                            <img src={GooglePlay}/>&nbsp;&nbsp;
                            <img src={Apple}/>
                        </FlexContainerRow>
                    </span>
                </DesktopBottomPart>
                <DesktopBottomPart_img>
                <img src={Logo}/>
                </DesktopBottomPart_img>
            </FlexContainerRowS>
        }
       
    </>
     
}



export default Bottom;
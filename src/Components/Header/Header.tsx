import SetWindowSize from "../../helpers/setWindowSize";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header(){
    const windowSize = SetWindowSize();


    return (
        <div>
            {windowSize<600?
            <MobileHeader/>:<DesktopHeader/>}
        </div>
    )
}
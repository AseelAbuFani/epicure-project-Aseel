import SetWindowSize from "../../helpers/setWindowSize";
import HomePageDesktop from "./homePageDesktop/HomePageDesktop";
import HomePageMobile from "./homePageMobile/HomePageMobile";

export default function HomePage(){
    const windowSize = SetWindowSize();


    return (
        <div>
            {windowSize<600?
            <HomePageMobile/>:<HomePageDesktop/>}
        </div>
    )
}
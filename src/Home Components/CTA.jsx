import { Link } from "react-router-dom";
import Cocktails from "../Global Components/cocktails";
import MobileSlider from "../Global Components/mobileSlider";

export default function CallToAction (){
    return(<>
    <div className="grid grid-cols-12 py-12 cta-home">
        <div className="col-span-12 pt-8">
        <h2 className="text-center xs:text-[28px] sm:text-[32px] md:text-[42px] uppercase text-gunmetal font-bold">4 Inspiring Flavors</h2>
        <p className="text-gunmetal m-auto text-center xs:px-[35px] md:px-40 py-8  xs:text-[16px] sm:text-[18px] md:text-[22px]">Our drinks were born in the Spring of 2020, when live music stopped.   
We looked past the empty stages and dreamt up an idea to share the feeling of seeing
your favorite band play your favorite song.
Our drink names honor our favorite local and regional bands.</p>
<div className="hideOnMobile">
        <Cocktails/>
        </div>
        <div className="showOnMobile">
            <MobileSlider/>
        </div>
        </div>
        <div className="col-span-12 text-center cta-btn mb-20">
            <Link to="/cocktails">
            <a className="py-3 text-white bg-gunmetal border-2 hover:border-[#646cff] px-6 rounded-md border-1 border-snow uppercase hover:text-[#9196ec]">Check out our canned cocktails</a>
        </Link>
        </div>
    </div>
    </>)
}
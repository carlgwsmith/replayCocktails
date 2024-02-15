import { Link } from "react-router-dom";

export default function CallToAction (){
    return(<>
    <div className="grid grid-cols-12 py-12 cta-home">
        <div className="col-span-12">
        <h2 className="text-center xs:text-[28px] sm:text-[32px] md:text-[42px] uppercase text-gunmetal font-bold">4 Inspiring Flavors</h2>
        <img src="/Images/cansforbanner.webp" width="100%"/>
        </div>
        <div className="col-span-12 text-center cta-btn">
            <Link to="/cocktails">
            <a className="py-3 text-white bg-gunmetal border-2 hover:border-[#646cff] px-6 rounded-md border-1 border-snow uppercase hover:text-[#9196ec]">Check out our canned cocktails</a>
        </Link>
        </div>
    </div>
    </>)
}
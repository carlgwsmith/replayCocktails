import LocationMap from "../Map/locationMap"
import Locations from "../Map/locations"
export default function WhereToBuy(){
    return(<>
    <div className="grid grid-cols-12 mx-[60px] my-[40px] ">
        <div className="col-span-12">
        <h3 className="text-center xs:text-[28px] sm:text-[32px] md:text-[42px] mb-8 uppercase text-gunmetal font-bold">Where to buy</h3>
        </div>
        <div className="col-span-6">
        <LocationMap/>
        </div>
        <div className="col-span-6">
            <Locations/>
        </div>
    </div>
    </>)
}
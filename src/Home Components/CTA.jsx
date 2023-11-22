export default function CallToAction (){
    return(<>
    <div className="grid grid-cols-12 py-12">
        <div className="col-span-12">
        <h2 className="text-center xs:text-[36px] md:text-[42px] uppercase text-gunmetal font-bold">6 Inspiring Flavors</h2>
        <img src="/Images/cansforbanner.webp" width="100%"/>
        </div>
        <div className="col-span-12 text-center">
        <button className="py-3 px-6 rounded-md border-1 border-snow uppercase hover:text-[#646cff] hover:bg-opacity-20">Check out our canned cocktails</button>
        </div>
    </div>
    </>)
}
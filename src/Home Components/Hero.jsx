export default function Hero(){
    return(<>
    {/* <div className="w-full bg-hero h-[100%] bg-blend-color bg-no-repeat" style={{'backgroundSize': '100%', 'backgroundPositionY': '-100px'}}>
        <h1>Replay Cocktails</h1>
    </div> */}
    <div className="grid grid-cols-12 h-[400px] heroBg">
        <div className="xs:col-span-10 xs:px-[50px] md:col-span-8 clipBg">
            <div className="alignMiddle">
            <h2 className="xs:text-[32px] xs:leading-[32px] sm:text-[46px] sm:leading-[46px] md:text-[56px] md:leading-[54px]">A COCKTAIL<br/> <span className="font-bold">AS BOLD AS YOU</span></h2>
            </div>
            <button className="py-3 px-6 rounded-md border-1 border-snow uppercase hover:text-[#646cff]">Find near you</button>
        </div>
    </div>
    </>)
}
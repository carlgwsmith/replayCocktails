export default function Hero(){
    return(<>
    {/* <div className="w-full bg-hero h-[100%] bg-blend-color bg-no-repeat" style={{'backgroundSize': '100%', 'backgroundPositionY': '-100px'}}>
        <h1>Replay Cocktails</h1>
    </div> */}
    <div className="grid grid-cols-12 h-[460px] heroBg">
        <div className="xs:col-span-10 xs:px-[60px] md:col-span-7 clipBg">
            <div className="alignMiddle">
            <h2 className="xs:text-[32px] xs:leading-[32px] sm:text-[46px] sm:leading-[46px] md:text-[68px] md:leading-[58px]">A COCKTAIL<br/> <span className="font-bold">AS BOLD AS YOU</span></h2>
            </div>
            <a href="/wheretobuy" className="py-3 text-white bg-gunmetal border-2 hover:border-[#646cff] px-6 rounded-md border-1 border-snow uppercase hover:text-[#9196ec]">Find near you</a>
        </div>
    </div>
    </>)
}
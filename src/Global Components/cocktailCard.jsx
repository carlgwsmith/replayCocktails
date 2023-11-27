export default function CocktailCard(props){
    return(<>
    
    <div className="grid grid-cols-6 mb-10 bg-white p-4 rounded-md">
        <div className="col-span-6 text-center text-gunmetal">
            <div className="h-300 cockCardImage">
            <img src={props.img}/>
            </div>
            <h2 className="text-[36px] font-bold mb-4 mt-4">{props.name}</h2>
            <div className="cockCardDesc">
                <p className="mb-4 mt-4">{props.desc}</p>
            </div>
            <div className="py-3 px-3 rounded-md border-2 border-gray-700 uppercase">
                <p>{props.abv}</p></div>
        </div>
    </div>
    </>)
}
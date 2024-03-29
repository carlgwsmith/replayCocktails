import CocktailCard from "./cocktailCard"
import Beltane from '../Pages/Beltane'
import Roseline from '../Pages/Roseline'
import NancyBoy from '../Pages/NancyBoy'
import Vibralux from '../Pages/Vibralux'
export default function Cocktails (){
    return(
    <div className="grid grid-cols-12 mx-[60px] mt-[40px] gap-8">
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/h300/BELTANE_FRONT.jpg" img2="/Images/artwork/h300/BELTANE_SIDE.jpg" name="Beltane" desc="Cucumber infused Vodka with Gin, Lime, and Mint. Expertly Balanced." abv="8% ABV" modalContent={<Beltane/>}/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/h300/ROSELINE_FRONT.jpg" img2="/Images/artwork/h300/ROSELINE_SIDE.jpg" name="Roseline" desc="Our Version of the Grapefruit Paloma, with Vodka, a hint of Reposado, Grapefruit & Lime." abv="8% ABV" modalContent={<Roseline/>}/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/h300/NANCYBOY_FRONT.jpg" img2="/Images/artwork/h300/NANCYBOY_SIDE.jpg"  name="Nancy Boy" desc="Brewed Black Tea with Vodka and Lemon. Not too sweet or too tart." abv="8% ABV" modalContent={<NancyBoy/>}/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/h300/VIBRALUX_FRONT.jpg" img2="/Images/artwork/h300/VIBRALUX_SIDE.jpg"  name="Vibralux" desc="London Dry Gin with Strawberry, Basil & Lime. Basil is the 'it' factor." abv="8% ABV" modalContent={<Vibralux/>}/>
        </div>
    </div>
    )
}
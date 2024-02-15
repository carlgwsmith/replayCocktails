import CocktailCard from "../Global Components/cocktailCard"
export default function CannedCocktails(){
    return(<>
    <div className="grid grid-cols-12 mx-[60px] my-[40px] gap-8">
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/20/BELTANE_FRONT.jpg" img2="/Images/artwork/20/BELTANE_SIDE.jpg" name="Beltane" desc="Vodka, Gin, Cucumber, Mint & Lime Juice" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/20/ROSELINE_FRONT.jpg" img2="/Images/artwork/20/ROSELINE_SIDE.jpg" name="Roseline" desc="Our Version of the Grapefruit Paloma, with Vodka, Grapfruit & Lime" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/20/NANCYBOY_FRONT.jpg" img2="/Images/artwork/20/NANCYBOY_SIDE.jpg"  name="Nancy Boy" desc="Vodka & Brewed Tea" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/artwork/20/VIBRALUX_FRONT.jpg" img2="/Images/artwork/20/VIBRALUX_SIDE.jpg"  name="Vibralux" desc="London Dry Gin with Strawberry, Basil & Lime" abv="8% ABV"/>
        </div>
    </div>
    </>)

}
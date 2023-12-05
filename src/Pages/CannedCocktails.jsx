import CocktailCard from "../Global Components/cocktailCard"
export default function CannedCocktails(){
    return(<>
    <div className="grid grid-cols-12 mx-[60px] my-[40px] gap-8">
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/beltane.webp" name="Beltane" desc="Vodka, Gin, Cucumber, Mint & Lime Juice" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/roseline.webp" name="Roseline" desc="Our Version of the Grapefruit Paloma, with Vodka, Grapfruit & Lime" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/morningRitual.webp" name="Nancy Boy" desc="Vodka & Brewed Tea" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/vibralux.webp" name="Vibralux" desc="London Dry Gin with Strawberry, Basil & Lime" abv="8% ABV"/>
        </div>
    </div>
    </>)

}
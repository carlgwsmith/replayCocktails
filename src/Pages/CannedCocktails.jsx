import CocktailCard from "../Global Components/cocktailCard"
export default function CannedCocktails(){
    return(<>
    <div className="grid grid-cols-12 mx-[60px] my-[40px] gap-8">
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/beltane.webp" name="Beltane" desc="Cucumber Infused Vodka, London Dry Gin, Mint Simple Syrup, Fresh Lime Juice, Tonic, REPLAY BUBBLES" abv="10% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/roseline.webp" name="Roseline" desc="Reposado Tequila, Grapefruit & Lime Juice, REPLAY BUBBLES" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/morningRitual.webp" name="Morning Ritual" desc="Bourbon with Ginger Ale, Blueberry & Blackberry Juice, Bitters, REPLAY BUBBLES" abv="8% ABV"/>
        </div>
        <div className="xs:col-span-12 sm:col-span-6 md:col-span-3">
            <CocktailCard img="/Images/vibralux.webp" name="Vibralux" desc="London Dry Gin, Fresh Strawberry Simple Syrup, Fresh Lime Juice, REPLAY BUBBLES" abv="8% ABV"/>
        </div>
    </div>
    </>)

}
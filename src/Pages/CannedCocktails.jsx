import CocktailCard from "../Global Components/cocktailCard"
export default function CannedCocktails(){
    return(<>
    <div className="grid grid-cols-12 mx-[60px] my-[40px] gap-8">
        <div className="col-span-3">
            <CocktailCard img="/Images/beltane.webp" name="Beltane" description="Cucumber Infused Vodka, London Dry Gin, Mint Simple Syrup, Fresh Lime Juice, Tonic, REPLAY BUBBLES" abv="10% ABV"/>
        </div>
        <div className="col-span-3">
            <CocktailCard img="/Images/roseline.webp" name="Roseline" description="Reposado Tequila, Grapefruit & Lime Juice, REPLAY BUBBLES" abv="8% ABV"/>
        </div>
        <div className="col-span-3">
            <CocktailCard img="/Images/morningRitual.webp" name="Morning Ritual" description="Bourbon with Ginger Ale, Blueberry & Blackberry Juice, Bitters, REPLAY BUBBLES" abv="8% ABV"/>
        </div>
        <div className="col-span-3">
            <CocktailCard img="/Images/vibralux.webp" name="Vibralux" description="London Dry Gin, Fresh Strawberry Simple Syrup, Fresh Lime Juice, REPLAY BUBBLES" abv="8% ABV"/>
        </div>
    </div>
    </>)

}
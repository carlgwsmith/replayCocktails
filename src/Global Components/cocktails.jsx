import CocktailCard from "./cocktailCard";
import Beltane from "../Pages/Beltane";
import cucumberMint from "../assets/Images/2026/Cucumber mint cocktail in focus.png";
import grapefruitPaloma from "../assets/Images/2026/Replay Lounge grapefruit paloma cocktail can.png";
import strawberryBasil from "../assets/Images/2026/Replay Lounge Strawberry Basil Cocktail can.png";
import peachTea from "../assets/Images/2026/Replay Lounge Peach Tea Cocktail can.png";
import Roseline from "../Pages/Roseline";
import NancyBoy from "../Pages/NancyBoy";
import Vibralux from "../Pages/Vibralux";
export default function Cocktails() {
  return (
    <div className="grid grid-cols-12 xs:mx-[30px] xs:mt-[20px] md:mx-[60px] md:mt-[40px] gap-8">
      <div className="xs:col-span-12 sm:col-span-6 md:col-span-6">
        <CocktailCard
          img={cucumberMint}
          name="Cucumber Mint"
          desc="Cucumber infused Vodka with Gin, Lime, and Mint. Expertly Balanced."
          abv="8% ABV"
          modalContent={<Beltane />}
        />
      </div>
      <div className="xs:col-span-12 sm:col-span-6 md:col-span-6">
        <CocktailCard
          img={grapefruitPaloma}
          name="Grapefruit Paloma"
          desc="Our Version of the Grapefruit Paloma, with Vodka, a hint of Reposado, Grapefruit & Lime."
          abv="8% ABV"
          modalContent={<Roseline />}
        />
      </div>
      <div className="xs:col-span-12 sm:col-span-6 md:col-span-6">
        <CocktailCard
          img={peachTea}
          name="Peach Tea"
          desc="Brewed Black Tea with Vodka and Lemon. Not too sweet or too tart."
          abv="8% ABV"
          modalContent={<NancyBoy />}
        />
      </div>
      <div className="xs:col-span-12 sm:col-span-6 md:col-span-6">
        <CocktailCard
          img={strawberryBasil}
          name="Strawberry Basil"
          desc="London Dry Gin with Strawberry, Basil & Lime. Basil is the 'it' factor."
          abv="8% ABV"
          modalContent={<Vibralux />}
        />
      </div>
    </div>
  );
}

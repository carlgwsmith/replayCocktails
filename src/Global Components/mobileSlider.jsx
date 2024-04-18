import CocktailCard from "./cocktailCard"
import Beltane from '../Pages/Beltane'
import Roseline from '../Pages/Roseline'
import NancyBoy from '../Pages/NancyBoy'
import Vibralux from '../Pages/Vibralux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Modal from 'react-modal';
// import { useState } from "react";
export default function MobileSlider(){

//     const customStyles = {
//         content: {
//             width: '50%',
//           top: '50%',
//           left: '50%',
//           right: 'auto',
//           padding: '40px',
//           color: '#333',
//           bottom: 'auto',
//           marginRight: '-50%',
//           transform: 'translate(-50%, -50%)',
//           backgroundColor: 'rgba(255, 255, 255, 1)'
//         },
//         overlay:{
//             backgroundColor: '#292929d7'
//         }
//       };
//     const [modalIsOpen, setIsOpen] = useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
  return(<>
    
    <div className="grid grid-cols-12 mb-10 bg-white p-4 rounded-md">
        <div className="col-span-12 text-center text-gunmetal">
            <Carousel autoPlay={true} infiniteLoop={true} interval={4000} showStatus={false} showArrows={false} showThumbs={false} showIndicators={false} stopOnHover={false}>
            <CocktailCard img="/Images/artwork/h300/BELTANE_FRONT.jpg" img2="/Images/artwork/h300/BELTANE_SIDE.jpg" name="Beltane" desc="Cucumber infused Vodka with Gin, Lime, and Mint. Expertly Balanced." abv="8% ABV" modalContent={<Beltane/>}/>
            <CocktailCard img="/Images/artwork/h300/ROSELINE_FRONT.jpg" img2="/Images/artwork/h300/ROSELINE_SIDE.jpg" name="Roseline" desc="Our Version of the Grapefruit Paloma, with Vodka, a hint of Reposado, Grapefruit & Lime." abv="8% ABV" modalContent={<Roseline/>}/>
            <CocktailCard img="/Images/artwork/h300/NANCYBOY_FRONT.jpg" img2="/Images/artwork/h300/NANCYBOY_SIDE.jpg"  name="Nancy Boy" desc="Brewed Black Tea with Vodka and Lemon. Not too sweet or too tart." abv="8% ABV" modalContent={<NancyBoy/>}/>
            <CocktailCard img="/Images/artwork/h300/VIBRALUX_FRONT.jpg" img2="/Images/artwork/h300/VIBRALUX_SIDE.jpg"  name="Vibralux" desc="London Dry Gin with Strawberry, Basil & Lime. Basil is the 'it' factor." abv="8% ABV" modalContent={<Vibralux/>}/>
             </Carousel>
        </div>
    </div>
    </>)
}
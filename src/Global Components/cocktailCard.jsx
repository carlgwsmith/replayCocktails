import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import { useState } from "react";

export default function CocktailCard(props){
    const customStyles = {
        content: {
            width: '50%',
          top: '50%',
          left: '50%',
          right: 'auto',
          padding: '40px',
          color: '#333',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        },
        overlay:{
            backgroundColor: '#292929d7'
        }
      };
    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(<>
    
    <div className="grid grid-cols-6 mb-10 bg-white p-4 rounded-md">
      <div className="col-span-6 text-center text-gunmetal">
      <h2 className="text-[36px] font-bold mt-4">{props.name}</h2>
      </div>
        <div className="col-span-6 text-center text-gunmetal">
            <div className="cockCardImage">
            <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showStatus={false} showArrows={false} showThumbs={false} showIndicators={false} stopOnHover={false}>
                {/* <div> */}
                    <img src={props.img2} style={{'height': '324px', 'width': '161px'}}/>
                {/* </div>
                <div> */}
                    <img src={props.img} style={{'height': '324px', 'width': '161px'}}/>
                {/* </div> */}
             </Carousel>
            </div>
            <p className="abv-number">{props.abv}</p>
            <div className="cockCardDesc">
                <p className="mb-4 mt-6">{props.desc}</p>
                <p className="text-center underline hover:underline hover:cursor-pointer" onClick={openModal}>Read More</p>
            </div>
            {/* <div className="py-3 px-3 rounded-md border-2 border-gray-700 uppercase">
                <p>{props.abv}</p></div> */}
        </div>
    </div>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>{props.modalContent}</div>
        <button onClick={closeModal} className="float-right text-white mt-10">close</button>
      </Modal>
    </>)
}
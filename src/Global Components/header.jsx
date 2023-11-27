import { useEffect, useState } from "react"
import {HiMenu} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'
import { NavLink, useLocation } from "react-router-dom";

function Header(){

const [navbarOpen, setNavbarOpen] = useState(false);
const [logoEffect, setLogoEffect] = useState(' text-[24px] font-bold tracking-tighter text-snow');
    
const handleNav = ()=>{
    setNavbarOpen(!navbarOpen)
}

const location = useLocation()
useEffect(() => {
    setNavbarOpen(false);
    setLogoEffect(' font-bold tracking-in-expand text-[24px] tracking-tighter text-snow')
}, [location]);


const linkStyle= 'm-4 text-[14px] hover:border-gunmetal border-snow border-b-[3px] hover:border-[#646cff] duration-300 uppercase'
const linkText= "text-[#534c57] hover:text-shadow-pop-bl hover:text-[#646cff] "

    return(
        <div className="flex justify-between items-center w-full bg-snow border-b-1 py-10 px-10 border-snow h-12 text-alice shadow-md mb-[4px]">
                <div className={logoEffect}><a href="/"><img src="/Images/logo_dark.png"  style={{'width':'200px'}}/></a></div>
                <ul className="hidden md:flex text-[16px] ease-in-out duration-500">
                    <li className={linkStyle}> 
                        <NavLink to={`/`} className={linkText}>
                            Home
                        </NavLink>
                    </li>
                    <li className={linkStyle}> 
                        <NavLink to={`/wheretobuy`} className={linkText}>
                            Where to buy
                        </NavLink>
                    </li>
                    <li className={linkStyle}> 
                        <NavLink to={`/cocktails`} className={linkText}>
                            Canned Cocktails
                        </NavLink>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    <HiMenu size={20} navbarOpen={true}/>
                </div>
                <div className={navbarOpen ? 'fixed left-0 top-0 w-[100%] border-right border-r-gray-900 h-full bg-gunmetal ease-in-out duration-500 z-[99999]' : 'z-[99999] bg-light fixed left-[-100%] ease-in-out duration-500'}>
                    <div className="grid grid-cols-6">
                    <div className="col-span-3 text-xl font-bold tracking-tighter m-4 w-[75%] inline-block">Replay Cocktails</div>
                    <div className="col-span-3 p-4 inline-block">
                <MdClose size={20} navbarOpen={false} onClick={handleNav} className="float-right"/>
                </div>
                    </div>
                    <ul className="uppercase">
                        <li className="p-4">
                        <NavLink to={`/home`}>Home</NavLink>
                        </li>
                        <li className="p-4">
                        <NavLink to={`/wheretobuy`}>Where to Buy</NavLink>
                        </li>
                        <li className="p-4">
                        <NavLink to={`/cocktails`}>Canned Cocktails</NavLink>
                        </li>
                </ul>
                </div>
        </div>
    )
}
export default Header
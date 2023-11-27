import { Outlet } from "react-router-dom";
import Footer from "../Global Components/footer";
import Header from "../Global Components/header";
// import AgeVerify from "../Global Components/ageVerify";

export default function Root(){

    return(
        <div className="flex flex-col h-full justify-between">
        {/* <AgeVerify/> */}
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}
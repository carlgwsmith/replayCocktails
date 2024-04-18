import Cocktails from "../Global Components/cocktails"

export default function CannedCocktails(){
    return(<div className="mb-12">
    <div className="xs:col-span-12 mt-14">
        <img src="/Images/namemark.png" width="45%" className="m-auto namemarkLogo"/>
    </div>
    <Cocktails/>
    </div>)

}
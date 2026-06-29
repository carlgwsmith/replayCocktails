import Cocktails from "../Global Components/cocktails";

export default function CannedCocktails() {
  return (
    <div className="mb-12">
      <div className="xs:col-span-12 mt-14 px-12">
        <img
          src="/Images/namemark.png"
          className="m-auto namemarkLogo w-[80%] min-h-[100px] object-contain"
        />
      </div>
      <Cocktails />
    </div>
  );
}

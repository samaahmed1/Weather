import { Link } from "react-router";
export default function Header({ setLocation, getWeatherData }) {
  return (
    <header className="py-5 sticky top-0 bg-gradient-to-l from-[#56c6e4] to-[#5398fe]">
      <div className="container px-5 mx-auto flex items-center justify-center md:justify-between flex-wrap gap-7">
        <div className="logo">
          <Link className="text-2xl text-white font-bold" to={"/"}>
            Weather App
          </Link>
        </div>
        <div className="search flex gap-3 flex-wrap items-center justify-center">
          <input
            onChange={(e) => {
              setLocation(e.target.value);
              console.log("Location:", e.target.value);
            }}
            className="outline-none border-none w-60 md:w-96 p-2 rounded-xl"
            type="search"
            name="search"
            id="search"
            placeholder="search for cities"
          />
          <button
            onClick={() => {
              console.log("Button Clicked!");
              getWeatherData();
            }}
            className="p-2 rounded-xl bg-white w-16 text-[#56c6e4] font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

import image from "../../images/weathe.webp";
export default function Home({ data }) {
  if (!data || !data.location || !data.current) {
    return (
      <div className="container py-20 px-5 mx-auto flex flex-col justify-center items-center gap-7">
        <span className="text-3xl text-white font-bold text-center">No Data Available</span>
        <img className="w-44 rounded-xl" src={image} alt="weathe" />
      </div>
    );
  }
  return (
    <section className="py-20">
      <div className="container px-5 mx-auto flex flex-col justify-center items-center gap-4 bg-gradient-to-t from-[#FFFFFF]/20 to-[#BFBFBF]/20 p-7 backdrop:blur-md w-64 md:w-80 rounded-xl text-white">
        <p className="text-xl md:text-2xl text-center font-bold">
          <span className="text-[#ffee32] font-bold">Location:</span> {data.location.name}, {data.location.country}
        </p>
        <p className="text-xl md:text-2xl font-bold text-center">
          <span className="text-[#ffee32] font-bold ">Region:</span> {data.location.region}
        </p>
        <p className="text-xl md:text-2xl font-bold text-center">
          <span className="text-[#ffee32] font-bold ">Temperature:</span> {data.current.temp_c}°C
        </p>
        <p className="text-xl md:text-2xl font-bold text-center">
          <span className="text-[#ffee32] font-bold ">Condition: </span> {data.current.condition.text}
        </p>
        <img className="w-24" src={data.current.condition.icon} alt="Weather Icon" />
      </div>
    </section>
  );
}

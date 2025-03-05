import { useState } from "react";
import Home from "./components/pages/Home";
import Header from "./components/layouts/Header";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  async function getWeatherData() {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=88a9fc86342d4d63a98185704230712&q=${location}&days=7&aqi=yes&alerts=yes`);
      if (response.status === 200) {
        const data = await response.json();
        setData(data);
        console.log("API Call Successful", data);
      }
    } catch (error) {
      console.error("Error from API Call", error);
    } finally {
      console.log("API Calling Success");
    }
  }

  return (
    <>
      <Header setLocation={setLocation} getWeatherData={getWeatherData} />
      <Home data={data} />
    </>
  );
}

export default App;

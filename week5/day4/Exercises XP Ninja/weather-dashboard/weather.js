import axios from "axios";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config(); 

const API_KEY = process.env.API_KEY; 
console.log("🔑 API_KEY loaded:", process.env.API_KEY);

export async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await axios.get(url);

    const data = res.data;
    const temp = data.main.temp;
    const desc = data.weather[0].description;

    console.log(chalk.blue.bold(`\n🌍 Weather in ${city}:`));
    console.log(chalk.green(`🌡️ Temperature: ${temp}°C`));
    console.log(chalk.yellow(`☁️ Description: ${desc}`));
    console.log();
  } catch (err) {
    console.error(
      chalk.red(
        "❌ Error fetching weather data:",
        err.response?.data?.message || err.message
      )
    );
  }
}

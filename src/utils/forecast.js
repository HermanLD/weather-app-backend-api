const axios = require("axios");

const getForecast = async (lat, lon, unit) => {
  try {
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${encodeURIComponent(
        lat
      )}&lon=${encodeURIComponent(lon)}&units=${encodeURIComponent(
        unit
      )}&days=6&key=${encodeURIComponent(process.env.WEATHERBIT_ACCESS_KEY)}`
    );

    return res.data.data;
  } catch (error) {
    throw new Error();
  }
};

module.exports = { getForecast };

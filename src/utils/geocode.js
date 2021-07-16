const axios = require("axios");

const getGeocode = async (city) => {
  try {
    const res = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        city
      )}.json?access_token=${encodeURIComponent(
        process.env.GEOCODE_ACCESS_KEY
      )}&limit=1`
    );

    return {
      lat: res.data.features[0].center[1],
      lon: res.data.features[0].center[0],
    };
  } catch (error) {
    throw new Error();
  }
};

module.exports = { getGeocode };

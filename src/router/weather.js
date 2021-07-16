const { Router } = require("express");
const { getForecast } = require("../utils/forecast");
const { getGeocode } = require("../utils/geocode");

const router = new Router();

router.get("/weather", async (req, res) => {
  let coords = { lat: req.body.lat, lon: req.body.lon };

  if (!coords.lat && !coords.lon) {
    try {
      coords = await getGeocode(req.body.address);
      const forecastData = await getForecast(
        coords.lat,
        coords.lon,
        req.body.unit
      );

      res.send(forecastData);
    } catch (error) {
      res.status(404).send(error);
    }
    return;
  }

  try {
    const forecastData = await getForecast(
      coords.lat,
      coords.lon,
      req.body.unit
    );

    res.send(forecastData);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;

const { Router } = require("express");
// const { getForecast } = require("../utils/forecast");
// const { getGeocode } = require("../utils/geocode");

const router = new Router();

router.get("/weather", async (req, res) => {
  res.send(req.query);

  // if (!coords.lat && !coords.lon) {
  //   try {
  //     coords = await getGeocode(req.query.address);
  //     const forecastData = await getForecast(
  //       req.query.lat,
  //       req.query.lon,
  //       req.query.unit
  //     );
  //     console.log(forecastData);
  //     // res.send(forecastData);
  //   } catch (error) {
  //     res.status(404).send(error);
  //   }
  //   return;
  // }

  // try {
  //   const forecastData = await getForecast(
  //     coords.lat,
  //     coords.lon,
  //     req.query.unit
  //   );

  //   res.send(forecastData);
  // } catch (error) {
  //   res.status(404).send(error);
  // }
});

module.exports = router;

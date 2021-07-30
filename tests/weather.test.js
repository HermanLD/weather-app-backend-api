const request = require("supertest");
const app = require("../src/app");

//? Reno coordinates
const {
  currLocation,
  inputLocation,
  nonExistentLocation,
} = require("./fixtures/queryURLs");

//? COMMENTED TO CUTDOWN API REQUESTS
// const { getForecast } = require("../src/utils/forecast");
// const { getGeocode } = require("../src/utils/geocode");

// test("Should return Reno forecast data from weatherbit API", async () => {
//   const data = await getForecast(currLocation.lat, currLocation.lon);
//   expect(data).not.toBeNull();
// });

// test("Should return Reno coords from mapbox API", async () => {
//   const data = await getGeocode(inputLocation.address);
//   console.log(data);
// });

test("Get weather data with current location (lat/lon)", async () => {
  const data = await request(app).get(`/weather${currLocation}`).expect(200);

  console.log(data);
});

test("Get location weather data with user input", async () => {
  const data = await request(app).get(`/weather${inputLocation}`).expect(200);

  console.log(data);
});

test("Should throw error if no weather data is found", async () => {
  await request(app).get(`/weather${nonExistentLocation}`).expect(404);
});

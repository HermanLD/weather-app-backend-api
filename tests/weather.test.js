const request = require("supertest");
const app = require("../src/app");

//? Reno coordinates
const currLocation = {
  lat: "39.5296",
  lon: "-119.8138",
  unit: "f",
};

const inputLocation = {
  address: "Reno",
  unit: "f",
};

const nonExistentLocation = {
  lat: "xzkadsklje",
  lon: "xysdfsdf5e",
  unit: "f",
};

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
  const data = await request(app)
    .get("/weather")
    .send(currLocation)
    .expect(200);

  console.log(data);
});

test("Get location weather data with user input", async () => {
  const data = await request(app)
    .get("/weather")
    .send(inputLocation)
    .expect(200);

  console.log(data);
});

test("Should throw error if no weather data is found", async () => {
  await request(app).get("/weather").send(nonExistentLocation).expect(404);
});

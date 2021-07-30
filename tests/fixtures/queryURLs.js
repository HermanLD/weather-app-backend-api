//* CURRENT LOCATION
//* -------------------------->
const currLocationData = {
  lat: "39.5296",
  lon: "-119.8138",
  address: undefined,
  unit: "f",
};
const currLocation = `?lat=${encodeURIComponent(
  currLocationData.lat
)}&lon=${encodeURIComponent(currLocationData.lon)}&address=${encodeURIComponent(
  currLocationData.address
)}&unit=${encodeURIComponent(currLocationData.unit)}`;

//* URL QUERIES w/ USER INPUT
//* -------------------------->
const inputLocationData = {
  lat: undefined,
  lon: undefined,
  address: "Reno",
  unit: "f",
};
const inputLocation = `?lat=${encodeURIComponent(
  inputLocationData.lat
)}&lon=${encodeURIComponent(
  inputLocationData.lon
)}&address=${encodeURIComponent(
  inputLocationData.address
)}&unit=${encodeURIComponent(inputLocationData.init)}`;

//* URL QUERIES w/ ERROR
//* -------------------------->
const nonExistentLocationData = {
  lat: "xzkadsklje",
  lon: "xysdfsdf5e",
  address: undefined,
  unit: "f",
};
const nonExistentLocation = `?lat=${encodeURIComponent(
  nonExistentLocationData.lat
)}&lon=${encodeURIComponent(
  nonExistentLocationData.lon
)}&address=${encodeURIComponent(
  nonExistentLocationData.address
)}&unit=${encodeURIComponent(nonExistentLocationData.init)}`;

module.exports = {
  currLocation,
  inputLocation,
  nonExistentLocation,
};

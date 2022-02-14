export const locationConstructor = (name, lat, lon) => {
  let newError = {};

  const coordPrecision = 6;
  name = name ? name : "Custom location";

  // validate Latitude
  if (!lat) {
    newError = {
      lat: "No value was found for latitude.",
      errorVal: lat,
    };
  }
  if (isNaN(parseFloat(lat))) {
    newError = {
      lat: "Latitude value should be a number.",
      errorVal: lat,
    };
  }

  lat = parseFloat(lat);

  if (lat < -90 || lat > 90) {
    newError = {
      lat: "Latitude should be a number in a range between -90 and 90.",
      errorVal: lat,
    };
  }

  lat = parseFloat(lat).toFixed(coordPrecision);

  // validate Longitude
  if (!lon) {
    newError = {
      error: "No value was found for longitude.",
      errorVal: lon,
    };
  }
  if (isNaN(parseFloat(lon))) {
    newError = {
      error: "Longitude value should be a number.",
      errorVal: lon,
    };
  }

  lon = parseFloat(lon);

  if (lon < -180 || lon > 180) {
    newError = {
      error: "Longitude should be a number in a range between -180 and 180.",
      errorVal: lon,
    };
  }

  lon = parseFloat(lon).toFixed(coordPrecision);

  if (Object.keys(newError).length) {
    return { error: newError };
  }
  return {
    location: {
      name,
      lat,
      lon,
    },
  };
};

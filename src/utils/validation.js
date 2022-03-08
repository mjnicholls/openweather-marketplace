import axios from "axios";

import { noBlankErrorMessage } from "../config";

export const validateEmail = (email) => {
  let res;
  const re = /^([^@\s]+)@((?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,})$/;

  if (!re.test(email)){
    res = "Must be a proper email address";
  }
  return res;
};

export const coordinatesError = (lat, lon) => {
  const latRangeError = "Latitude value cannot be below -90 or above 90";
  const lngRangeError = "Longitude value cannot be below -180 or above 180";

  const error = {};

  if (lat === "undefined") {
    error.lat = noBlankErrorMessage;
  } else if (lat < -90 || lat > 90) {
    error.lat = latRangeError;
  }
  if (lon === "undefined") {
    error.lon = noBlankErrorMessage;
  } else if (lon < -180 || lon > 180) {
    error.lon = lngRangeError;
  }
  if (Object.keys(error).length) {
    return error;
  }
  return null;
};

export const validatePhoneNumber = (val) => {
  let res;
  if (val.length > 20) {
    res = "Phone number is too long";
  } else {
    let re = /^[0-9A-Za-z\s-+()]+$/;
    if (!re.test(val)) {
      res = "Can only contain digits, letters and +, (), - characters";
    }
  }
  return res;
};

export const validateVat = (val) => {
  return axios.get(
    `http://openweathermap.stage.owm.io/api/check_vat?vat_id=${val}&country=GB`
  );
};

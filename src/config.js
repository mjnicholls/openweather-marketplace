export const noBlankErrorMessage = 'Cannot be blank'

export const file = [
    { value: 'CSV', label: 'CSV' },
    { value: 'JSON', label: 'JSON' },
    { value: 'CSV & JSON', label: 'CSV & JSON' },
  ]

  export const download = [
    { value: 'All locations', label: 'All locations in a single file' },
    { value: 'One file', label: 'One file per location' },
  ]

  export const units = [
    { value: 'Metric', label: 'Metric (Celsius, hPa, meter/sec, mm/h)' },
    { value: 'Imperial', label: 'Imperial (Fahrenheit, hPa, miles/hour, mm/h)' },
    { value: 'Standard', label: 'Standard (Kelvin, hPa, meter/sec, mm/h)' },
  ]

  export const weathers = [
    { value: 'Temperature', label: 'Temperature' },
    { value: 'Max Temp', label: 'Max Temperature' },
    { value: 'Pressure', label: 'Pressure' },
    { value: 'Clouds', label: 'Clouds' },
    { value: 'Rain', label: 'Rain' },
    { value: 'Dew Point', label: 'Dew Point' },
    { value: 'Wind', label: 'Wind (speed, direction, gust)' },
    { value: 'Min Temp', label: 'Min Temperature' },
    { value: 'Feels Like', label: 'Feels like' },
    { value: 'Humidity', label: 'Humidity' },
    { value: 'Conditions', label: 'Weather Conditions' },
    { value: 'Snow', label: 'Snow' },
    { value: 'Visibility', label: 'Visibility' },
  ]

  export const weathersHistory = [
    { value: 'Temperature', label: 'Temperature' },
    { value: 'Pressure', label: 'Pressure' },
    { value: 'Clouds', label: 'Clouds' },
    { value: 'Dew Pt', label: 'Dew Point' },
    { value: 'Wind', label: 'Wind (speed, direction)' },
    { value: 'Humidity', label: 'Humidity' },
    { value: 'Precipitation', label: 'Precipitation' },
  ]


  export const statesOfAmerica = [
    { value: 'Alabama', label: 'Alabama', price: 800, zip: '(811 Zip Codes)' },
    { value: 'Alaska', label: 'Alaska', price: 400, zip: '(273 Zip Codes)' },
    { value: 'Arizona', label: 'Arizona', price: 800, zip: '(528 Zip Codes)' },
    { value: 'Arkansas', label: 'Arkansas', price: 400, zip: '(705 Zip Codes)' },
    { value: 'California', label: 'California', price: 1500, zip: '(2591 Zip Codes)' },
    { value: 'Colorado', label: 'Colorado', price: 800, zip: '(645 Zip Codes)' },
    { value: 'Connecticut', label: 'Connecticut', price: 800, zip: '(429 Zip Codes)' },
    { value: 'Delaware', label: 'Delaware', price: 200, zip: '(96 Zip Codes)' },
    { value: 'District of Columbia', label: 'District of Columbia', price: 400, zip: '(277 Zip Codes)' },
    { value: 'Florida', label: 'Florida', price: 1300, zip: '(1472 Zip Codes)' },
    { value: 'Georgia', label: 'Georgia', price: 800, zip: '(952 Zip Codes)' },
    { value: 'Hawaii', label: 'Hawaii', price: 400, zip: '(137 Zip Codes)' },
    { value: 'Idaho', label: 'Idaho', price: 400, zip: '(320 Zip Codes)' },
    { value: 'Illinois', label: 'Illinois', price: 1300, zip: '(1575 Zip Codes)' },
    { value: 'Indiana', label: 'Indiana', price: 800, zip: '(967 Zip Codes)' },
    { value: 'Iowa', label: 'Iowa', price: 1300, zip: '(1055 Zip Codes)' },
    { value: 'Kansas', label: 'Kansas', price: 800, zip: '(747 Zip Codes)' },
    { value: 'Kentucky', label: 'Kentucky', price: 800, zip: '(946 Zip Codes)' },
    { value: 'Louisiana', label: 'Louisiana', price: 800, zip: '(719 Zip Codes)' },
    { value: 'Maine', label: 'Maine', price: 800, zip: '(485 Zip Codes)' },
    { value: 'Maryland', label: 'Maryland', price: 800, zip: '(605 Zip Codes)' },
    { value: 'Massachusetts', label: 'Massachusetts', price: 800, zip: '(684 Zip Codes)' },
    { value: 'Michigan', label: 'Michigan', price: 1300, zip: '(1159 Zip Codes)' },
    { value: 'Minnesota', label: 'Minnesota', price: 800, zip: '(991 Zip Codes)' },
    { value: 'Mississippi', label: 'Mississippi', price: 800, zip: '(531 Zip Codes)' },
    { value: 'Missouri', label: 'Missouri', price: 1300, zip: '(1156 Zip Codes)' },
    { value: 'Montana', label: 'Montana', price: 800, zip: '(404 Zip Codes)' },
    { value: 'Nebraska', label: 'Nebraska', price: 800, zip: '(620 Zip Codes)' },
    { value: 'Nevada', label: 'Nevada', price: 400, zip: '(253 Zip Codes)' },
    { value: 'New Hampshire', label: 'New Hampshire', price: 400, zip: '(281 Zip Codes)' },
    { value: 'New Jersey', label: 'New Jersey', price: 800, zip: '(723 Zip Codes)' },
    { value: 'New Mexico', label: 'New Mexico', price: 800, zip: '(427 Zip Codes)' },
    { value: 'New York', label: 'New York', price: 1500, zip: '(2153 Zip Codes)' },
    { value: 'North Carolina', label: 'North Carolina', price: 1300, zip: '(1081 Zip Codes)' },
    { value: 'North Dakota', label: 'North Dakota', price: 800, zip: '(407 Zip Codes)' },
    { value: 'Ohio', label: 'Ohio', price: 1300, zip: '(1415 Zip Codes)' },
    { value: 'Oklahoma', label: 'Oklahoma', price: 800, zip: '(764 Zip Codes)' },
    { value: 'Oregon', label: 'Oregon', price: 800, zip: '(478 Zip Codes)' },
    { value: 'Pennsylvania', label: 'Pennsylvania', price: 1500, zip: '(2176 Zip Codes)' },
    { value: 'Rhode Island', label: 'Rhode Island', price: 200, zip: '(90 Zip Codes)' },
    { value: 'South Carolina', label: 'South Carolina', price: 800, zip: '(534 Zip Codes)' },
    { value: 'South Dakota', label: 'South Dakota', price: 400, zip: '(385 Zip Codes)' },
    { value: 'Tennessee', label: 'Tennessee', price: 800, zip: '(785 Zip Codes)' },
    { value: 'Texas', label: 'Texas', price: 1500, zip: '(2598 Zip Codes)' },
    { value: 'Utah', label: 'Utah', price: 400, zip: '(346 Zip Codes)' },
    { value: 'Vermont', label: 'Vermont', price: 400, zip: '(308 Zip Codes)' },
    { value: 'Virginia', label: 'Virginia', price: 1300, zip: '(1214 Zip Codes)' },
    { value: 'Washington', label: 'Washington', price: 800, zip: '(716 Zip Codes)' },
    { value: 'West Virginia', label: 'West Virginia', price: 800, zip: '(851 Zip Codes)' },
    { value: 'Wisconsin', label: 'Wisconsin', price: 800, zip: '(896 Zip Codes)' },
    { value: 'Wyoming', label: 'Wyoming', price: 400, zip: '(195 Zip Codes)' },
  ]


  export const years = [
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
  ]


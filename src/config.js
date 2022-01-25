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

  export const titles = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Mrs', label: 'Mrs' },
    { value: 'Miss', label: 'Miss' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' },
  ]

  export const countriesDefault = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AX', name: 'Åland Islands' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia (Plurinational State of)' },
    { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BV', name: 'Bouvet Island' },
    { code: 'BR', name: 'Brazil' },
    { code: 'IO', name: 'British Indian Ocean Territory' },
    { code: 'BN', name: 'Brunei Darussalam' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'CV', name: 'Cabo Verde' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CX', name: 'Christmas Island' },
    { code: 'CC', name: 'Cocos (Keeling) Islands' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo (Democratic Republic of the)' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CI', name: "Côte d'Ivoire" },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czechia' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FK', name: 'Falkland Islands (Malvinas)' },
    { code: 'FO', name: 'Faroe Islands' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GF', name: 'French Guiana' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'TF', name: 'French Southern Territories' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GR', name: 'Greece' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HM', name: 'Heard Island and McDonald Islands' },
    { code: 'VA', name: 'Holy See' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran (Islamic Republic of)' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IM', name: 'Isle of Man' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KP', name: "Korea (Democratic People's Republic of)" },
    { code: 'KR', name: 'Korea (Republic of)' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: "Lao People's Democratic Republic" },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macao' },
    { code: 'MK', name: 'Macedonia (the former Yugoslav Republic of)' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia (Federated States of)' },
    { code: 'MD', name: 'Moldova (Republic of)' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NU', name: 'Niue' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestine, State of' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PN', name: 'Pitcairn' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RE', name: 'Réunion' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russian Federation' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'BL', name: 'Saint Barthélemy' },
    { code: 'SH', name: 'Saint Helena, Ascension and Tristan da Cunha' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'MF', name: 'Saint Martin (French part)' },
    { code: 'PM', name: 'Saint Pierre and Miquelon' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'Sao Tome and Principe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SX', name: 'Sint Maarten (Dutch part)' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'GS', name: 'South Georgia and the South Sandwich Islands' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SJ', name: 'Svalbard and Jan Mayen' },
    { code: 'SZ', name: 'Swaziland' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syrian Arab Republic' },
    { code: 'TW', name: 'Taiwan, Province of China' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania, United Republic of' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TG', name: 'Togo' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom of Great Britain and Northern Ireland' },
    { code: 'UM', name: 'United States Minor Outlying Islands' },
    { code: 'US', name: 'United States of America' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VE', name: 'Venezuela (Bolivarian Republic of)' },
    { code: 'VN', name: 'Viet Nam' },
    { code: 'VG', name: 'Virgin Islands (British)' },
    { code: 'VI', name: 'Virgin Islands (U.S.)' },
    { code: 'WF', name: 'Wallis and Futuna' },
    { code: 'EH', name: 'Western Sahara' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' },
  ]

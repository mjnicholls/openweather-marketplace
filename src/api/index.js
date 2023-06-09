export const serverBaseURL = 'https://new.agromonitoring.com/api/'

export const personalAccountBase = `${serverBaseURL}auth/`

export const loginURL = `${personalAccountBase}auth/login`
export const logoutURL = `${personalAccountBase}auth/logout`

export const accountInfo = `${personalAccountBase}account`

export const invoiceUpdate = `${personalAccountBase}account/invoice`

export const confirmVat = 'https://home.agromonitoring.com/api/check_vat'
export const countriesList = 'https://home.agromonitoring.com/api/countries'

export const test = 'https://home.openweathermap.org/history_bulks/'

// export const orders = "https://marketplace-weather.owm.io/api/my_orders_list"

export const orders = `${window.location.protocol}//${window.location.host}/api/my_orders_list`

// export const confirmVat = 'https://old.agromonitoring.com/api/check_vat'

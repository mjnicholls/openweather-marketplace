// let initialState = {
//   email: null,
//   userName: null, // 'mjnicholls'
//   isStripeCustomer: false,
//   authorized: false,
//   invoiceInfo: {
//       legal_form: "individual",
//       organisation: "",
//       title: "",
//       first_name: "",
//       last_name: "",
//       country: "",
//       address_line_1: "",
//       address_line_2: "",
//       city: "",
//       postal_code: "",
//       state: "",
//       phone: "",
//       vat_id: "",
//     },
//   prices: {
//     hb: 0,
//     hfb: 0
//   },
//   currency: ''
// }


let initialState = {
  email: 'mjnichollsishere@gmail.com',
  userName: 'mjnicholls',
  isStripeCustomer: false,
  authorized: false,
  invoiceInfo: {
      legal_form: "individual",
      organisation: "",
      title: "",
      first_name: "",
      last_name: "",
      country: "",
      address_line_1: "",
      address_line_2: "",
      city: "",
      postal_code: "",
      state: "",
      phone: "",
      vat_id: "",
    },
  prices: {
    hb: 0,
    hfb: 0
  },
  currency: 'GBP'
}

const gonObject = window.gon

if (gonObject && Object.keys(gonObject).length) {
  initialState.email = gonObject.email
  initialState.userName = gonObject.userName
  initialState.isStripeCustomer = gonObject.isStripeCustomer
  initialState.authorized = initialState.email && initialState.userName
  initialState.invoiceInfo = {...initialState.invoiceInfo, ...gonObject.invoiceInfo}
  if (gonObject.invoiceInfo) {
    initialState.currency = gonObject.invoiceInfo.currency
  }
  if (gonObject.prices && gonObject.prices.history) {
    initialState.prices.hb = gonObject.prices.history.hb
    initialState.prices.hfb = gonObject.prices.history.hfb
  }
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

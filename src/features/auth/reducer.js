let initialState = {
  user: {
    email: null,
    id: null,
    tariff: null,
    tariff_full: null,
    username: 'mjnicholls',
  },
}

const gonObject = window.gon

if (gonObject && Object.keys(gonObject).length) {
  initialState = gonObject
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

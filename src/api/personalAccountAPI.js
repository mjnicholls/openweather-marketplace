

import axios from 'axios'

import {
  accountInfo,
  invoiceUpdate,
  confirmVat,
  test
} from './index'

export const createBillingDetails = (params) =>
  /** Create billing details */
  axios.post(invoiceUpdate, params)

export const updateBillingDetails = (params) =>
  /** Update billing information */
  axios.put(invoiceUpdate, params)

  export const confirmVatNumber = () =>
  /** Confirm VAT: 200 - correct VAT, 422 - incorrect VAT */
  axios.get(confirmVat)

  export const getAccountInfo = () =>
  /** Get account preferences */
  axios.get(accountInfo)

  export const stripe = () => axios.put(test)

  

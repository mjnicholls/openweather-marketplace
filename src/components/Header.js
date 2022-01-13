import React, { useState } from 'react'

import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import { useSelector } from 'react-redux'

const selectUserName = (state) => state.auth.user.username


const HeaderMarket = () => {
  const userName = useSelector(selectUserName)
  const [isDropDown, setIsDropDown] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className={`page-header ${isMenuOpen ? 'open' : ''}`}>
      <div className="container-xxl">
        <div className="page-header-content">
          <a href="https://openweathermap.org/">
            <img
              src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
              alt="Open Weather Logo"
              height="40px"
              width="93.33px"
            />
          </a>


          <button
            className="remove-default-button-style d-xxl-none"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              src="https://openweathermap.org/themes/openweathermap/assets/img/owm_icons/icon_hamburger.svg"
              alt="Open menu"
            />
          </button>

          <div className="break d-xxl-none"></div>

          <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className="d-xxl-none">
              <div className="input-group search ms-auto">
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <img
                      src="https://home.openweathermap.org/assets/icon_search.svg"
                      alt="search bar logo"
                    />
                  </button>
                </div>
                <form
                  className="input"
                  action="https://openweathermap.org/find"
                  acceptCharset="UTF-8"
                  method="get"
                >
                  <input name="utf8" type="hidden" value="&#x2713;" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Weather in your city"
                    name="q"
                  />
                  <input style={{ display: 'none' }} type="submit" />
                </form>
              </div>
            </li>
            <li>
                <a href="https://home.openweathermap.org/history_bulks/new">History Bulk</a>
              </li>
              <li>
                <a href="https://home.openweathermap.org/history_forecast_bulks/new">History Forecast Bulk</a>
              </li>

            <li>
                <a href="https://home.openweathermap.org/zip_code_data/new">Data by US State</a>
              </li>


            <li>
                <a className="marketplace" href="https://home.openweathermap.org/marketplace">
                  Marketplace
                </a>
              </li>

            {userName ? (
              <li className="d-none d-lg-block">
                <Dropdown
                  isOpen={isDropDown}
                  toggle={() => setIsDropDown(!isDropDown)}
                >
                  <DropdownToggle className="remove-default-button-style d-flex align-items-center justify-content-center pt-0 pb-0">
                    <div className="inner-user-container">{userName}</div>
                    <img
                      src="https://openweathermap.org/themes/openweathermap/assets/img/owm_icons/icon_down_white.svg"
                      alt="Caret"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <a
                      href="https://home.openweathermap.org/myservices"
                      target="_blank"
                    >
                      My Services
                    </a>
                    <a
                      href="https://home.openweathermap.org/api_keys"
                      target="_blank"
                    >
                      My API Keys
                    </a>
                    <a
                      href="https://home.openweathermap.org/payments"
                      target="_blank"
                    >
                      My Payments
                    </a>
                    <a
                      href="https://home.openweathermap.org/home"
                      target="_blank"
                    >
                      My Profile
                    </a>
                    <a
                      href="https://home.openweathermap.org/users/sign_out"
                      target="_blank"
                    >
                      Logout
                    </a>
                  </DropdownMenu>
                </Dropdown>
              </li>
            ) : (
              <li>
                <a
                  href="https://home.openweathermap.org/users/sign_in"
                  target="_blank"
                >
                  Sign In
                </a>
              </li>
            )}
            <li>
              <a href="https://home.openweathermap.org/questions">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderMarket

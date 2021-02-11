import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Calendar from "../asset/icons/calendar";
import Clock from "../asset/icons/clock";
import Setting from "../asset/icons/setting";
import logo from "../asset/img/logo.svg";

const Menu = () => {

    return (
      <div className="menu-width ">
        <header>
          <div className="d-flex align-items-center flex-column mb-5">
            <Link to="/">
              <img src={logo} alt="" width="70px" />
            </Link>
            {/* <h6>سامانه هوشمند قرائت کنتور</h6> */}
          </div>
          <div className="menu-tab mt-5">
            <ul className="rtl nav d-flex flex-column">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  exact
                  to="/"
                  activeStyle={{
                    color: "#c4d82e",
                  }}
                  title="نمایش لحظه ای"
                >
                  <Clock />

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/reports"
                  activeStyle={{
                    color: "#c4d82e",
                  }}
                  title="گزارشات"
                >
                  <Calendar />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/setting"
                  activeStyle={{
                    color: "#c4d82e",
                  }}
                  title="تنظیمات"
                >
                  <Setting />
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
}

export default Menu;

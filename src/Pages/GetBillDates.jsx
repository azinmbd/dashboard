import React from "react";

import {  fetchBillData } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "../Component/DatePicker";

import moment from "jalali-moment";
import waterBillLogo from "../asset/img/Ab-o-Fazelab-01.svg";
import GasBillLogo from "../asset/img/naft_iran-01.svg";
import ElecBillLogo from "../asset/img/Tavanir_logo-01.svg";
import UserIcon from "../asset/icons/UserIcon";
import CodeIcon from "../asset/icons/CodeIcon";
import TagIcon from "../asset/icons/TagIcon";
import HomeIcon from "../asset/icons/HomeIcon";
import { useEffect } from "react";

const GetBillDates = () => {
  const dispatch = useDispatch();
 
  const newItem = useSelector((state) => state.SetItemReducer.data.item);
  const dateRange = useSelector((state) => state.SetDateReducer.data);
  const renderBtn = () => {
    if (dateRange.dateRange) {
      if ((dateRange.dateRange.from, dateRange.dateRange.to)) {
        return (
          <Link
            className="btn calendar-btn"
            refresh="true"
            onClick={() => getDates(dateRange.dateRange)}
            to={getTemplate()}
          >
            نمایش قبض
          </Link>
        );
      } else {
        return <a className="btn calendar-btn deactive"> نمایش قبض</a>;
      }
    } else {
      return <a className="btn calendar-btn deactive"> نمایش قبض</a>;
    }
  };
  const getTemplate = () => {
    if (newItem.type === "electricity") {
      return `/reports/bill/electricity/${newItem.uuid}`;
    }
    if (newItem.type === "water") {
      return `/reports/bill/water/${newItem.uuid}`;
    }
    if (newItem.type === "gas") {
      return `/reports/bill/gas/${newItem.uuid}`;
    }
  };
  const getDates = (dateRange) => {
    const beginTime =
      new Date(
        moment
          .from(
            `${dateRange.from.year}.${dateRange.from.month}.${dateRange.from.day}`,
            "fa",
            "YYYY/MM/DD"
          )
          .format("YYYY/MM/DD")
      ).getTime() / 1000;

    const endTime =
      new Date(
        moment
          .from(
            `${dateRange.to.year}.${dateRange.to.month}.${dateRange.to.day}`,
            "fa",
            "YYYY/MM/DD"
          )
          .format("YYYY/MM/DD")
      ).getTime() / 1000;

    dispatch(
      fetchBillData({
        deviceID: newItem.uuid,
        beginTime,
        endTime,
      })
    );
  };
  const getLogo = () => {
    if (newItem.type === "electricity") {
      return ElecBillLogo;
    }
    if (newItem.type === "water") {
      return waterBillLogo;
    }
    if (newItem.type === "gas") {
      return GasBillLogo;
    }
  };
  const getType = (type) => {
    if (type === "electricity") {
      return "برق";
    }
    if (type === "water") {
      return "آب";
    }
    if (type === "gas") {
      return "گاز";
    }
  };
  return (
    <div className=" content-width">
      <div className="bill info-pop">
        <div className="date-range-title">
          ابتدا و انتهای بازه زمانی را انتخاب کنید.
        </div>
        <div className="text-left mb-5">
          <img src={getLogo()} width="70px" alt="" />
        </div>
        <div className="text-left">
          <UserIcon />
          <span className="info-name">نام مالک:</span>
          <span className="info-num">{newItem.owner}</span>
        </div>
        <div className="text-left">
          <CodeIcon />

          <span className="info-name">شماره شناسه:</span>
          <span className="info-num">{newItem.zipCode}</span>
        </div>
        <div className="text-left">
          <HomeIcon />

          <span className="info-name">نوع کنتور:</span>
          <span className="info-num">{getType(newItem.type)}</span>
        </div>
        <div className="text-left">
          <TagIcon />

          <span className="info-name">برند:</span>
          <span className="info-num">{newItem.brand}</span>
        </div>

        {renderBtn()}
        <DatePicker />
      </div>
    </div>
  );
};

export default GetBillDates;

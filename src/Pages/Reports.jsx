import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {withRouter} from 'react-router-dom';
import {fetchAllBuildings} from "../store/slices/AllBuildingsSlice"
import {
  // fetchAllBuildings,
  fetchBuildingDevices,
  searchBuildingDevices,
} from "../store/actions";

import DevicesItem from "../Component/DevicesItem";
import SearchIcon from "../asset/icons/SearchIcon";

const Reports = (props)=> {

  const [searchText, setSearchText] = useState("");

  const uuid = useSelector((state) => state.AllBuildingsReducer.data);
  const buildingDevices = useSelector((state) => state.BuildingDevicesReducer.data.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBuildings());
    dispatch(fetchBuildingDevices(uuid));

    validate();
  }, [dispatch,uuid]);




  const  validate = () => {
    document.addEventListener("DOMContentLoaded", function () {
      var elements = document.getElementsByTagName("INPUT");
      for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function (e) {
          e.target.setCustomValidity("");
          if (!e.target.validity.valid) {
            e.target.setCustomValidity("لطفا این بخش را پر کنید");
          }
        };
        elements[i].oninput = function (e) {
          e.target.setCustomValidity("");
        };
      }
    });
  };
  const handleChange = (event) => {
    setSearchText( event.target.value );

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();

    dispatch(searchBuildingDevices({
      buildingId: uuid,
      searchText: searchText,
    }));
    const path = `/reports/search/${searchText}`
    props.history.push(path)
    document.getElementById("mainInput").reset();
  };

  const renderList = () => {
      if (buildingDevices) {
        
        return buildingDevices.map((item, index) => {
          return <DevicesItem key={index} item={item} />;
        });
      }
  };

    return (
      <div className="Reports-bg content-width ">
        <div className=" form-box">
          <h6>برای جستجوی کنتور مورد نظر شناسه کنتور را وارد کنید.</h6>
          <form
            onSubmit={(event)=>handleSubmit(event)}
            id="mainInput"
            className="form-inline my-2 my-lg-0 search-form"
          >
            <input
              className="form-control mr-sm-2 "
              value={searchText}
              onChange={(event)=>handleChange(event)}
              type="number"
              placeholder="شماره شناسه کنتور..."
              aria-label="Search"
              required
            />

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              جستجو
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="list-box" id="style-7">{renderList()}</div>
      </div>
    );
}

export default withRouter(Reports)
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchBuildingDevices } from "../store/actions";

import DevicesItem from "../Component/DevicesItem";
import SearchIcon from "../asset/icons/SearchIcon";
const SearchResult = (props) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    validate();

  }, []);

  const uuid = useSelector((state) => state.AllBuildingsReducer.data);
  const searchResult = useSelector((state) => state.SearchBuildingReducer.data);

  const validate = () => {
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
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    validate();
    event.preventDefault();
     dispatch( searchBuildingDevices({
      buildingId: uuid,
      searchText: searchText,
    }));
    const path = `/reports/search/${searchText}`;
    props.history.push(path);
    document.getElementById("mainInput").reset();
  };

  const renderSearchResult = () => {
    if (searchResult.length === 0) {
      return <div>نتیجه ای یافت نشد</div>;
    } else {
      return searchResult.map((item, index) => {
        return <DevicesItem key={index} item={item} />;
      });
    }
  };

  return (
    <div className="Reports-bg p-3 content-width">
      <div className="w-100 form-box">
        <h6>برای جستجوی کنتور مورد نظر شناسه کنتور را وارد کنید.</h6>
        <form
          onSubmit={(event) => handleSubmit(event)}
          id="mainInput"
          className="form-inline my-2 my-lg-0 search-form"
        >
          <input
            className="form-control mr-sm-2 "
            value={searchText}
            onChange={(event) => handleChange(event)}
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
      <div className="list-box" id="style-7">
        {renderSearchResult()}
      </div>
    </div>
  );
};


export default withRouter(SearchResult);

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import L from "leaflet";
import {fetchAllBuildings} from "../store/slices/AllBuildingsSlice"
import {fetchBuildingAssets} from "../store/slices/FetchBuildingsSlice"

import {
  // fetchAllBuildings,
  // fetchBuildingAssets,
  // fetchAssetDevicesCount,
  fetchBillData,
  setAssetDetail,
} from "../store/actions";
import filter from "../asset/img/filter.svg";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import persianJs from "persianjs";
import { Link } from "react-router-dom";
import low from "../asset/img/low.svg";
import high from "../asset/img/high.svg";
import building from "../asset/img/building.svg";

var waterIcon = L.icon({
  iconUrl: require("../asset/img/water.svg"),
  iconRetinaUrl: require("../asset/img/water.svg"),
  iconSize: [60, 70],
  iconAnchor: [12.3, 41],
  popupAnchor: [11, -28],
});
var gasIcon = L.icon({
  iconUrl: require("../asset/img/gas.svg"),
  iconRetinaUrl: require("../asset/img/gas.svg"),
  iconSize: [60, 70],
  iconAnchor: [12.3, 41],
  popupAnchor: [11, -28],
});
var electricityICon = L.icon({
  iconUrl: require("../asset/img/elec.svg"),
  iconRetinaUrl: require("../asset/img/elec.svg"),
  iconSize: [60, 70],
  iconAnchor: [12.3, 41],
  popupAnchor: [11, -28],
});

const Home = () => {
  const [mapView, setMapView] = useState({
    lng: 53.982,
    lat: 26.5425,
    zoom: 13,
  });
  const [type, setType] = useState("electricity");

  
  const uuid = useSelector((state) => state.AllBuildingsReducer.data);
  const assets = useSelector((state) => state.BuildingAssetsReducer.data);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(
        fetchBillData({
          deviceID: "41af3dc8-1219-11eb-add6-ff73c1624de9",
          beginTime: 1607200200,
          endTime:1234567890,
        })
      );
    dispatch(fetchAllBuildings());
    dispatch(fetchBuildingAssets(uuid));
  }, [dispatch, uuid, type]);

  const getIcon = (type) => {
    if (type === "electricity") {
      return electricityICon;
    }
    if (type === "water") {
      return waterIcon;
    }
    if (type === "gas") {
      return gasIcon;
    }
  };
  const persionConvertor = (devicesCount) => {
    const persian = persianJs(`${devicesCount}`).englishNumber()._str;
    return persian;
  };

  const renderMarker = () => {
    if (assets) {
      return assets.map((item, index) => {
        const position = [item.latitude, item.longitude];
        return (
          <Marker position={position} icon={getIcon(type)} key={index} >
            <Popup>
              <div className="pop-title">
                <span>{item.name}</span>
                <img src={building} width="30px" alt="" />
              </div>

              <div className="info-pop">
                <div className="d-flex justify-content-between">
                  <span className="info-name">نام مالک:</span>
                  <span className="info-num">{item.name}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="info-name">نوع کنتور:</span>
                  <span className="info-num">{getType()}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="info-name">تعداد کنتور:</span>
                  <span className="info-num">{persionConvertor(item.name =="برج مسعود" ? 1 : 0)}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span className="info-name">سیگنال:</span>
                  <img
                    alt=""
                    className="info-num"
                    width="20px"
                    src={type === "water" ? low : high}
                  />
                </div>

                <Link
                  onClick={() => setDetail(item)}
                  className="btn pop-btn"
                  to={`/home/${item.name}`}
                >
                  لیست کنتور ها
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      });
    }
  };
  const getType = () => {
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
  const setDetail = (item) => {
    dispatch(
      setAssetDetail({
        assetId: item.uuid,
        type: type,
      })
    );
  };
  const onChangeValue = (event, id) => {
    setType(event.target.value);
  };

  const position = [mapView.lat, mapView.lng];
  return (
    <div className="content-width p-0">
      <div className="selector">
        <div className="title">
          <img src={filter} alt="" width="20px" />
          <span>فیلتر ها</span>
        </div>
        <div onChange={(event) => onChangeValue(event)}>
          <label className="radio-box">
            <input
              className="mr-2"
              type="radio"
              value="electricity"
              name="type"
              defaultChecked
            />
            کنتور برق
          </label>
          <label className="radio-box">
            <input className="mr-2" type="radio" value="water" name="type" />
            کنتور آب
          </label>
          <label className="radio-box">
            <input className="mr-2" type="radio" value="gas" name="type" />
            کنتور گاز
          </label>
        </div>
      </div>
      <Map center={position} zoom={mapView.zoom} className="h-100">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {renderMarker()}
      </Map>
    </div>
  );
};

export default Home;

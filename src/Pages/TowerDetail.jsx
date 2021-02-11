import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import persianJs from "persianjs";
import { fetchAssetDevices, fetchSingleAsset } from "../store/actions";
import DevicesItem from "../Component/DevicesItem";
import building from "../asset/img/building.svg";
import low from "../asset/img/low.svg";
import high from "../asset/img/high.svg";
import BackIcon from "../asset/icons/BackIcon";
import waterIcon from "../asset/img/water-icon.svg";
import gasIcon from "../asset/img/gas-icon.svg";
import electricityICon from "../asset/img/elec-icon.svg";

const TowerDetail = (props) => {
  const devices = useSelector((state) => state.AssetDevicesReducer.data);
  const assetInfo = useSelector((state) => state.SingleAssetReducer.data);
  const id = useSelector((state) => state.AssetDetailReducer.data.assetId);
  const type = useSelector((state) => state.AssetDetailReducer.data.type);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchSingleAsset({
        assetId: id,
        type: type,
      })
    );
    dispatch(
      fetchAssetDevices({
        assetId: id,
        type: type,
      })
    );
  }, [dispatch,type,id]);

  const goBack = () => {
    props.history.push("/");
  };
  const persionConvertor = (data) => {
    const persian = persianJs(`${data}`).englishNumber()._str;
    return persian;
  };
  const renderTower = () => {
    return (
      <div className="card tower-info">
        <div className="card-body">
          <div className="w-50">
            <div className="tower-name">
              <img src={building} width="50px" alt="" />
              <h3 className="card-title">{assetInfo.name}</h3>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <p className="card-text">
                  نوع:
                  <span>{assetInfo.type}</span>
                </p>
                <p className="card-text">
                  تعداد کنتور :<span>{persionConvertor(devices.length)}</span>
                </p>
                <p className="card-text">
                  سیگنال :
                  <img
                    alt=""
                    className="ml-2"
                    width="20px"
                    src={assetInfo.name === "برج سینا" ? low : high}
                  />
                </p>
              </div>
              <div>
                <p className="card-text">
                  نوع مالک:
                  <span>{assetInfo.subtype}</span>
                </p>
                <p className="card-text">
                  آدرس :<span>{assetInfo.address}</span>
                </p>
                <p className="card-text">
                  توضیحات :<span>{assetInfo.description}</span>
                </p>
              </div>

              <div className="tag-box">
                <div className="tag">
                  <img src={getIcon()} width="30px" alt="" />
                  {getType()}
                </div>
                <div className="tag">{assetInfo.city}</div>
                <div className="tag">{assetInfo.type}</div>
              </div>
            </div>
          </div>
          <a onClick={goBack} className="btn btn-light mb-auto">
            <BackIcon />
            بازگشت
          </a>
        </div>
      </div>
    );
  };
  const getIcon = () => {
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
  const renderList = () => {
    return devices.map((item, index) => {
      return <DevicesItem key={index} item={item} />;
    });
  };
  return (
    <div className="content-width">
      <div>{renderTower()}</div>
      <div className="list-box">{renderList()}</div>
    </div>
  );
};

export default withRouter(TowerDetail);

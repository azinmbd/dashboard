import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import persianJs from "persianjs";
import { setItem } from "../store/actions";
import UserIcon from "../asset/icons/UserIcon";
import CodeIcon from "../asset/icons/CodeIcon";
import TagIcon from "../asset/icons/TagIcon";
import HomeIcon from "../asset/icons/HomeIcon";
const DevicesItem = (props) => {
  const persionConvertor = (data) => {
    const persian = persianJs(`${data}`).englishNumber()._str;
    return persian;
  };
  const dispatch = useDispatch();
  const runAction = (item) => dispatch(setItem(item));
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
  const { item } = props;
  return (
    <div className="col-4 p-2">
      <div className="list-item ">
        <div className="info-pop">
          <div className="text-left">
            <UserIcon />
            <span className="info-name">نام مالک:</span>
            <span className="info-num">{item.owner}</span>
          </div>
          <div className="text-left">
            <CodeIcon />

            <span className="info-name">شماره شناسه:</span>
            <span className="info-num">{persionConvertor(item.zipCode)}</span>
          </div>
          <div className="text-left">
            <HomeIcon />

            <span className="info-name">نوع کنتور:</span>
            <span className="info-num">{getType(item.type)}</span>
          </div>
          <div className="text-left">
            <TagIcon />

            <span className="info-name">برند:</span>
            <span className="info-num">{item.brand}</span>
          </div>
        </div>

        <Link
          className="btn "
          to={"/reports/bill/"}
          onClick={() => runAction(item)}
        >
          مشاهده جزییات
        </Link>
      </div>
    </div>
  );
};

export default DevicesItem;

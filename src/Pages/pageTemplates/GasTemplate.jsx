import React from "react";
import { useSelector } from "react-redux";
import persianJs from "persianjs";

import moment from "jalali-moment";
import GasBillLogo from "../../asset/img/naft_iran-01.svg";
import GasMan from "../../asset/img/gasman.png";

const GasTemplate = () => {
  const billData = useSelector((state) => state.GetBillReducer.data);
  const timeConverter = (time) => {
    const engDate = moment(time * 1000).format("YYYY/MM/DD");
    const perSianDate = persianJs(
      moment(`${engDate}`, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")
    ).englishNumber()._str;
    return perSianDate;
  };
  const persionConvertor = (data) => {
    const persian = persianJs(`${data}`).englishNumber()._str;
    return persian;
  };
  const translateNumber = (num) => {
    const translatedNum = persianJs(num).digitsToWords().toString();
    return translatedNum;
  };

  return (
    <div className=" content-width  pb-3">
      <div className="bill-template gas-template ">
        <div className="col-12 p-2 d-flex">
          <div className="col-6 p-0 border-gas">
            <div>
              <div className="d-flex justify-content-between">
                <table className=" table table-bordered w-75">
                  <tbody className="text-left">
                    <tr>
                      <th scope="row" className="light-orange">
                        نام مشترک
                      </th>
                      <td>{billData.owner}</td>
                    </tr>
                    <tr>
                      <th scope="row " className="light-orange">
                        نشانی و کد پستی
                      </th>
                      <td>{billData.address}</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table table-bordered w-25">
                  <thead>
                    <tr>
                      <th scope="col" className="light-orange">
                        کد آدرس
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.zipCode)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-1 ">
                <table className="table table-bordered ">
                  <thead className="light-orange">
                    <tr>
                      <th scope="col"> منطقه گاز</th>
                      <th scope="col"> اقلیم</th>
                      <th scope="col">شماره اشتراک</th>
                      <th scope="col"> شماره سریال کنتور</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.companyArea)}</td>
                      <td>{persionConvertor(billData.climate)}</td>
                      <td>{persionConvertor(billData.consumerID)}</td>
                      <td>{persionConvertor(billData.factoryID)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-1 ">
                <table className="table table-bordered ">
                  <thead className="light-orange">
                    <tr>
                      <th scope="col"> شماره سری</th>
                      <th scope="col"> شماره پرونده</th>
                      <th scope="col"> نوع مصرف</th>
                      <th scope="col"> گروه</th>
                      <th scope="col"> تعداد واحد</th>
                      <th scope="col"> ظرفیت </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.billingSeries)}</td>
                      <td>{persionConvertor(billData.fileNumber)}</td>
                      <td>{persionConvertor(billData.consumerType)}</td>
                      <td>{persionConvertor(billData.bundle)}</td>
                      <td>{persionConvertor(billData.consumerCount)}</td>
                      <td>{persionConvertor(billData.capacity)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-1 ">
                <table className="table table-bordered ">
                  <thead className="light-orange">
                    <tr>
                      <th scope="col"> رقم پیشین</th>
                      <th scope="col"> رقم فعلی</th>
                      <th scope="col"> تاریخ قرائت پیشین</th>
                      <th scope="col"> تاریخ قرائت فعلی</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.previousConsumption)}</td>
                      <td>{persionConvertor(billData.currentConsumption)}</td>
                      <td>{timeConverter(billData.previousReading)}</td>
                      <td>{timeConverter(billData.currentReading)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-3 d-flex">
              <table className=" table table-bordered w-25">
                <thead>
                  <tr>
                    <th scope="col" className="light-orange">
                      وضعیت مصرف
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="h4">
                    <td>{}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered w-75">
                <thead>
                  <tr className="light-orange">
                    <th scope="col" colSpan="3">
                      مصرف به مترمکعب
                    </th>
                  </tr>
                  <tr>
                    <th scope="col"> کم مصرف</th>
                    <th scope="col"> مصرف متعارف</th>
                    <th scope="col">پر مصرف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-green">
                      {billData.consumption < 1000
                        ? persionConvertor(billData.consumption)
                        : ""}
                    </td>
                    <td className="bg-orange">
                      {1000 < billData.consumption &&
                      billData.consumption < 2000
                        ? persionConvertor(billData.consumption)
                        : ""}
                    </td>
                    <td className="bg-red">
                      {billData.consumption > 2000
                        ? persionConvertor(billData.consumption)
                        : ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-1 ">
              <table className=" table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col" className="light-orange pink-color">
                      آدرس اداره گاز و تلفت های مربوطه
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{billData.companyAddress}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex">
              <table className=" table table-bordered w-50 height-edit">
                <tbody className="text-left">
                  <tr>
                    <th scope="row" className="light-orange w-50">
                      بهای گاز مصرفی
                    </th>
                    <td>{persionConvertor(billData.cost)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      بدهی/بستانکاری گذشته
                    </th>
                    <td>{persionConvertor(billData.debt)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      بدهی متفرقه
                    </th>
                    <td>{persionConvertor(billData.otherLiabilities)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      مالیات بر ارزش افزوده و عوارض شهرداری
                    </th>
                    <td>{persionConvertor(billData.tax)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      بیمه
                    </th>
                    <td>{persionConvertor(billData.insurance)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      مانده بدهی/بستانکاری
                    </th>
                    <td>{persionConvertor(billData.debtBalance)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      مانده هزار ریال
                    </th>
                    <td>{persionConvertor(billData.remainingRials)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange">
                      کسر هزار ریال
                    </th>
                    <td>{persionConvertor(billData.deductionRials)}</td>
                  </tr>
                  <tr>
                    <th scope="row " className="light-orange"></th>
                    <td>{}</td>
                  </tr>
                </tbody>
              </table>
              <div className="w-50 d-flex flex-column justify-content-center align-items-end">
                <img src={GasBillLogo} width="100px" alt="" />
                <table className=" table table-bordered w-75  mt-2">
                  <thead>
                    <tr>
                      <th scope="col" className="bg-orange">
                        تعداد بدهی
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.zipCode)}</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table table-bordered  w-75  mt-2">
                  <thead>
                    <tr>
                      <th scope="col" className="bg-orange">
                        شناسه پرداخت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.paymentID)}</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table table-bordered  w-75 mt-2">
                  <thead>
                    <tr>
                      <th scope="col" className="bg-orange">
                        شناسه قبض
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{persionConvertor(billData.billingID)}</td>
                    </tr>
                  </tbody>
                </table>
                <table className=" table table-bordered  w-75 mt-2">
                  <thead>
                    <tr>
                      <th scope="col" className="bg-orange">
                        مهلت پرداخت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{timeConverter(billData.paymentDeadline)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <table className=" table table-bordered mt-2">
              <tbody className="text-left">
                <tr>
                  <th scope="row" className="light-orange ">
                    مبلغ قابل پرداخت به عدد
                  </th>
                  <td>{persionConvertor(billData.payableAmount)}</td>
                </tr>
                <tr>
                  <th scope="row " className="light-orange">
                    مبلغ قابل پرداخت به حروف
                  </th>
                  <td>{translateNumber(billData.payableAmount)} هزار ریال</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12  pb-2">
          <div className="gassBillFooter">
            <img src={GasMan} alt="" />
            مشترک گرامی با توجه به حذف قبض کاغذی از ابتدای آذرماه، جهت دریافت
            قبض الکترونیکی شماره اشتراک خود را به شماره ۲۰۰۰۱۷۰۴ پیامک نمایید.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasTemplate;

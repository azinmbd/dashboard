import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import persianJs from "persianjs";

import moment from "jalali-moment";
import ElecLogo from "../../asset/img/Tavanir_logo-01.svg";
import check from "../../asset/img/check.svg";
import { useEffect } from "react";

const ElectricityTemplate = (props) => {
  const dispatch = useDispatch();

  const billData = useSelector((state) => state.GetBillReducer.data);
  console.log(billData);

  const timeConverter = (time) => {
    // window.location.reload();
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
    <div className=" content-width pb-3">
      <div className="bill-template elec-template ">
        <img className="first" src={ElecLogo} width="40px" alt="" />
        <img className="second" src={ElecLogo} width="40px" alt="" />
        <div className="d-flex">
          <div className="col-4">
            <div className="mt-2 box border-bottom">
              <div className="d-flex">
                <span>مشترک محترم:</span>
                <p className="ml-2">{billData.owner}</p>
              </div>
              <div className="d-flex">
                <span>نشانی:</span>
                <p className="ml-2">{billData.address}</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>کدپستی:</span>
                  <p className="ml-2">{persionConvertor(billData.zipCode)}</p>
                </div>
                <div className="d-flex">
                  <span>پلاک:</span>
                  <p className="ml-2">undefiend</p>
                </div>
                <div className="d-flex">
                  <span>تعداد خانوار:</span>
                  <p className="ml-2">undefiend</p>
                </div>
              </div>
            </div>
            <div className="box border-bottom">
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <span>پرونده:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.fileNumber)}
                  </p>
                </div>
                <div className="d-flex">
                  <span>شناسایی:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.consumerID)}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>رمزرایانه:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.fileNumber)}
                  </p>
                </div>
                <div className="d-flex">
                  <span>بدنه کنتور:</span>
                  <p className="ml-2">{persionConvertor(billData.factoryID)}</p>
                </div>
              </div>
            </div>
            <div className="box ">
              <div className="d-flex justify-content-between ">
                <div className="d-flex">
                  <span>تعرفه:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.consumerType)}
                  </p>
                </div>
                <div className="d-flex">
                  <span>نوع فعالیت:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.activityType)}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>تاریخ نصب اولیه:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.initialInstallationDate)}
                  </p>
                </div>
                <div className="d-flex">
                  <span> فاز/آمپر:</span>
                  <p className="ml-2">{persionConvertor(billData.phaseAmp)}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>تاریخ آخرین تعویض :</span>
                  <p className="ml-2">
                    {persionConvertor(billData.lastReplacementDate)}
                  </p>
                </div>
                <div className="d-flex">
                  <span> ارقام /ضریب:</span>
                  <p className="ml-2">
                    {persionConvertor(billData.figuresCoefficients)}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>تاریخ انقضا پروانه :</span>
                  <p className="ml-2">
                    {persionConvertor(billData.licenseExpirationDate)}
                  </p>
                </div>
                <div className="d-flex">
                  <span> نحوه قرائت:</span>
                  <p className="ml-2">{billData.readingMethod}</p>
                </div>
              </div>
            </div>
            <table className=" table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">متوسط ۶۰ روزه</th>
                  <td>۱</td>
                  <td>۲</td>
                  <td>۳</td>
                  <td>۴</td>
                  <td>۵</td>
                  <td>۶</td>
                </tr>
                <tr>
                  <th scope="row">سال گذشته</th>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <th scope="row ">سال جاری</th>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
              </tbody>
            </table>

            <div className="box  rounded-top rounded-bottom">
              <div className="d-flex justify-content-between border-bottom">
                <div className="d-flex">
                  <span>تاریخ صدور :</span>
                  <p className="ml-2">{timeConverter(billData.issueDate)}</p>
                </div>
                <div className="d-flex">
                  <span>تاریخ مراجعه بعدی :</span>
                  <p className="ml-2">{timeConverter(billData.nextReading)}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex">
                  <span>منطقه برق:</span>
                  <p className="ml-2">{billData.companyArea}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>آدرس منطقه:</span>
                  <p className="ml-2">{billData.companyAddress}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <table className=" table table-bordered mt-1">
              <tbody>
                <tr>
                  <th className="bt-none" scope="row">
                    شرح
                  </th>
                  <td className="bt-none">تاریخ</td>
                  <td className="bt-none"> میان باری</td>
                  <td className="bt-none"> اوج بار</td>
                  <td className="bt-none"> کم باری</td>
                  <td className="bt-none">دوره</td>
                </tr>
                <tr>
                  <th className="bb-none" scope="row">
                    قرائت کنونی
                  </th>
                  <td className="bb-none">
                    {timeConverter(billData.currentReading)}
                  </td>
                  <td className="bb-none">
                    {persionConvertor(billData.currentMiddleLoad)}
                  </td>
                  <td className="bb-none">
                    {persionConvertor(billData.currentPeakLoad)}
                  </td>
                  <td className="bb-none">
                    {persionConvertor(billData.currentLowLoad)}
                  </td>
                  <td className="bb-none">undefiend</td>
                </tr>
                <tr>
                  <th className="bt-none" scope="row ">
                    قرائت پیشین
                  </th>
                  <td className="bt-none">
                    {timeConverter(billData.previousReading)}
                  </td>
                  <td className="bt-none">
                    {persionConvertor(billData.previousMiddleLoad)}
                  </td>
                  <td className="bt-none">
                    {persionConvertor(billData.previousPeakLoad)}
                  </td>
                  <td className="bt-none">
                    {persionConvertor(billData.previousLowLoad)}
                  </td>
                  <td className="bt-none bb-none"></td>
                </tr>
                <tr>
                  <th className="bt-none" scope="row" colSpan="2">
                    مصرف (Kwh):
                  </th>
                  <td className="bt-none">
                    {persionConvertor(billData.middleLoadConsumption)}
                  </td>
                  <td className="bt-none">
                    {persionConvertor(billData.peakLoadConsumption)}
                  </td>
                  <td className="bt-none">
                    {persionConvertor(billData.lowLoadConsumption)}
                  </td>
                  <td className="bt-none"></td>
                </tr>
              </tbody>
            </table>
            <div className="box  border-bottom rounded-top rounded-bottom">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <span>مصرف کل دوره (Kwh) :</span>
                  <p className="ml-2">
                    {persionConvertor(
                      billData.lowLoadConsumption +
                        billData.peakLoadConsumption +
                        billData.middleLoadConsumption
                    )}
                  </p>
                </div>
                <div className="d-flex">
                  <span>متوسط مصرف ۳۰ روزه :</span>
                  <p className="ml-2">undefiend</p>
                </div>
                <div className="d-flex">
                  <span>تعداد روز دوره :</span>
                  <p className="ml-2">undefiend</p>
                </div>
              </div>
            </div>

            <table className=" table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">پله‌های مصرف ۳۰ روزه</th>
                  <td>نرخ‌(ریال)</td>
                  <td>مصرف ۳۰ روزه</td>
                  <td> مبلغ ۳۰ روزه</td>
                  <td> فرمول محاسبه و مبلغ</td>
                </tr>
                <tr>
                  <th className="bb-none" scope="row">
                    مصرف ۰ تا ۱۰۰
                  </th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td rowSpan="7">تعداد روز * (مبلغ ماهانه/۳۰)</td>
                </tr>
                <tr>
                  <th scope="row ">مازاد بر ۱۰۰ تا ۲۰۰</th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                </tr>
                <tr>
                  <th scope="row ">مازاد بر ۲۰۰ تا ۳۰۰</th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                </tr>
                <tr>
                  <th scope="row ">مازاد بر ۳۰۰ تا ۴۰۰</th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                </tr>
                <tr>
                  <th scope="row ">مازاد بر ۴۰۰ تا ۵۰۰</th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                </tr>
                <tr>
                  <th scope="row ">مازاد بر ۵۰۰ تا ۶۰۰</th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                </tr>
                <tr>
                  <th scope="row ">مازاد بر ۶۰۰</th>
                  <td>undefiend</td>
                  <td>undefiend</td>
                  <td>undefiend</td>
                </tr>
              </tbody>
            </table>
            <table className=" table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">شرح مصرف</th>
                  <td>نرخ‌ (ریال)</td>
                  <td>مصرف</td>
                  <td>شرح مبلغ</td>
                  <td>مبلغ</td>
                </tr>
                <tr>
                  <th scope="row">میزان مصرف در اوج‌بار</th>
                  <td>x</td>
                  <td></td>
                  <td>هزینه مصرف در اوج‌بار</td>
                  <td>x</td>
                </tr>
                <tr>
                  <th scope="row ">میزان مصرف در کم‌باری</th>
                  <td>x</td>
                  <td></td>
                  <td>تخفیف مصرف کم‌باری</td>
                  <td>x</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-around mt-1">
              <div className="d-flex">
                <span>واحد حوادث:</span>
                <p className="ml-2">۱۲۱</p>
              </div>
              <div className="d-flex">
                <span>پاسخگویی صورت حساب:</span>
                <p className="ml-2">۶۶۶۱۶۱۵۶</p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <table className=" table table-bordered mt-1">
              <tbody>
                <tr>
                  <th className="bt-none" scope="row">
                    عنوان
                  </th>

                  <td className="bt-none">مبلغ (ریال)</td>
                </tr>
                <tr>
                  <th scope="row">مبلغ مصرف</th>
                  <td>{persionConvertor(billData.consumptionAmount)}</td>
                </tr>
                <tr>
                  <th scope="row" className="tr-height">
                    آبونمان
                  </th>
                  <td>{persionConvertor(billData.subscription)}</td>
                </tr>
                <tr>
                  <th className="bb-none" scope="row">
                    بهای برق دوره
                  </th>
                  <td className="bb-none">{persionConvertor(billData.cost)}</td>
                </tr>
                <tr>
                  <th className="bt-none bb-none" scope="row">
                    مالیات بر ارزش افزوده
                  </th>
                  <td className="bt-none bb-none">
                    {persionConvertor(billData.tax)}
                  </td>
                </tr>
                <tr>
                  <th className="bt-none  bb-none" scope="row">
                    مبلغ بیمه
                  </th>
                  <td className="bt-none bb-none">
                    {persionConvertor(billData.insurance)}
                  </td>
                </tr>
                <tr>
                  <th className="bt-none bb-none" scope="row">
                    عوارض برق
                  </th>
                  <td className="bt-none bb-none">
                    {persionConvertor(billData.toll)}
                  </td>
                </tr>
                <tr className="tr-height">
                  <th className="bt-none" scope="row">
                    بدهکاری
                  </th>
                  <td className="bt-none">{persionConvertor(billData.debt)}</td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex border-bottom justify-content-center position-relative">
              <img
                className="check check-left"
                src={check}
                width="25px"
                alt=""
              />
              <span>مبلغ قابل پرداخت:</span>
              <p className="ml-4">{persionConvertor(billData.payableAmount)}</p>
            </div>
            <div className="d-flex justify-content-center position-relative">
              <img
                className="check check-left"
                src={check}
                width="25px"
                alt=""
              />
              <span>مهلت پرداخت:</span>
              <p className="ml-4">{timeConverter(billData.paymentDeadline)}</p>
            </div>
          </div>
        </div>
        <div className="d-flex hr mt-3 pt-3 position-relative">
          <span className="telephone">پرداخت آسان و مطمئن با ۱۵۲۱</span>
          <div className="col-6">
            <table className=" table table-bordered mt-1 mb-1">
              <tbody>
                <tr>
                  <th className="bt-none" scope="row">
                    رمزرایانه
                  </th>
                  <td className="bt-none">دوره</td>
                  <td className="bt-none">سال</td>
                  <td className="bt-none">کد افتصادی</td>
                  <td className="bt-none">undefiend</td>
                </tr>
                <tr>
                  <th className="bb-none" scope="row">
                    undefiend
                  </th>
                  <td className="bb-none">undefiend</td>
                  <td className="bb-none">undefiend</td>
                  <td className="bb-none" colSpan="2">
                    مهلت پرداخت مشمول بدهی قبلی نمی‌باشد
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-3">
            <img className="check" src={check} width="25px" alt="" />
            <table className=" table table-bordered mt-1 mb-1">
              <tbody>
                <tr className="position-relative">
                  <th className="bt-none" scope="row">
                    شناسه قبض
                  </th>
                  <td className="bt-none">شناسه پرداخت</td>
                </tr>
                <tr>
                  <th className="bb-none" scope="row">
                    {persionConvertor(billData.billingID)}
                  </th>
                  <td className="bb-none">
                    {persionConvertor(billData.paymentID)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-3">
            <div className="d-flex border-bottom justify-content-center mt-1 position-relative">
              <img className="check" src={check} width="25px" alt="" />
              <span>مبلغ قابل پرداخت:</span>
              <p className="ml-4">
                {persionConvertor(billData.payableAmount)} ریال
              </p>
            </div>
            <div className="d-flex  justify-content-center">
              <p className="ml-4 mt-1">
                {translateNumber(billData.payableAmount)} ریال
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ElectricityTemplate);

import React from "react";
import { useSelector } from "react-redux";
import persianJs from "persianjs";

import moment from "jalali-moment";
import waterBillLogo from "../../asset/img/Ab-o-Fazelab-01.svg";

const WaterTemplate = () => {
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
      <div className="bill-template">
        <div className="mb-2 d-flex justify-content-between head-info">
          <div>
            <img className="mr-3" src={waterBillLogo} width="40px" alt="" />
            <span className="waterCompany">{billData.companyTitle}</span>
          </div>
          <div className="d-flex align-items-center">
            <span>ناحیه:</span>
            <p className="mb-0 ml-3">
              {persionConvertor(billData.companyArea)}
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span>نوع صورت حساب:</span>
            <p className="mb-0 ml-3">undefiend</p>
          </div>
          <div className="d-flex align-items-center">
            <span>تلفن امداد:</span>
            <p className="mb-0 ml-3">undefiend</p>
          </div>
          <div className="d-flex align-items-center">
            <span>نشانی ناحیه:</span>
            <p className="mb-0 ml-3">
              {persionConvertor(billData.companyAddress)}
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between water-border col-12">
            <div className="bill-header">
              <div>
                <span>مشترک گرامی:</span> <p>{billData.owner}</p>
              </div>
              <div>
                <span>شماره اشتراک:</span>
                <p>{persionConvertor(billData.consumerID)}</p>
              </div>
              <div>
                <span className="red">شماره پرونده:</span>
                <p>{persionConvertor(billData.fileNumber)}</p>
              </div>
            </div>
            <div className="bill-header">
              <div>
                <span>کد و نوع تعرفه:</span>
                <p>{persionConvertor(billData.tariffCodeType)}</p>
              </div>
              <div>
                <span>کدپستی:</span>
                <p>{persionConvertor(billData.zipCode)}</p>
              </div>
              <div>
                <span>نشانی:</span> <p>{billData.address}</p>
              </div>
            </div>
            <div className="bill-header">
              <div>
                <span> مامور قرائت:</span>
                <p>{persionConvertor(billData.readingAgentCode)}</p>
              </div>
              <div>
                <span>محدوده قرائت:</span>
                <p>{persionConvertor(billData.zipCode)}</p>
              </div>
            </div>
            <div className="bill-header">
              <div>
                <span>تاریخ صدور قبض:</span>
                <p>{timeConverter(billData.issueDate)}</p>
              </div>
              <div>
                <span>مراجعه بعدی:</span>
                <p>{timeConverter(billData.nextReading)}</p>
              </div>
              <div>
                <span>سریال قبض:</span>
                <p>{persionConvertor(billData.billingSeries)}</p>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="col-2 p-0">
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">واحد</th>
                    <th scope="col">فروش</th>
                    <th scope="col">سکونت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{billData.consumerType}</th>
                    <td>undef</td>
                    <td>{persionConvertor(billData.consumerCount)}</td>
                  </tr>
                  <tr>
                    <th scope="row">غیر مسکونی</th>
                    <td>undef</td>
                    <td>undef</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="3" className="text-center">
                      قطر انشعاب
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">آب</th>
                    <th scope="col">فاضلاب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{persionConvertor(billData.waterDiameter)}</td>
                    <td>{persionConvertor(billData.sewerDiameter)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-4 p-0">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="3" className="text-center">
                      قرائت
                    </th>
                  </tr>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">قبلی</th>
                    <th scope="col">فعلی</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">تاریخ</th>
                    <td>{timeConverter(billData.previousReading)}</td>
                    <td>{timeConverter(billData.currentReading)}</td>
                  </tr>
                  <tr>
                    <th scope="row">رقم</th>
                    <td>{persionConvertor(billData.previousConsumption)}</td>
                    <td>{persionConvertor(billData.currentConsumption)}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">ظرفیت قراردادی</th>
                    <th scope="col">شماره بدنه کنتور</th>
                    <th scope="col">وضعیت کنتور</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      {persionConvertor(billData.contractualCapacity)}
                    </td>
                    <td>{persionConvertor(billData.factoryID)}</td>
                    <td>{persionConvertor(billData.meterStatus)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3 p-0">
              <table className="table table-bordered emty-h"></table>
            </div>
            <div className="col-3 p-0">
              <table className="table table-bordered emty-h mr-0">
                <thead>
                  <tr className="blue-bg">
                    <th scope="col">شرح</th>
                    <th scope="col">مبلغ (ریال)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row" className=" text-left">
                      <div>بهای آب مصرفی</div>
                      <div>بهای خدمات دفع فاضلاب</div>
                      <div>مالیات بر ارزش افزوده</div>
                      <div>تکالیف قانون بودجه</div>
                      <br />
                      <br />
                      <div>مانده قبلی</div>
                      <div>جمع صورت حساب دوره</div>
                    </td>
                    <td className="text-left">
                      <div>{persionConvertor(billData.cost)}</div>
                      <div>{persionConvertor(billData.toll)}</div>
                      <div>{persionConvertor(billData.tax)}</div>
                      <div>{persionConvertor(billData.insurance)}</div>
                      <br />
                      <br />
                      <div>{persionConvertor(billData.debt)}</div>
                      <div>{persionConvertor(billData.totalBillingPeriod)}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex align-items-end">
            <div className="col-6 p-0">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th colSpan="5" className="text-center">
                      مصرف (متر مکعب)
                    </th>
                  </tr>
                  <tr>
                    <th scope="col">طول دوره</th>
                    <th scope="col">مصرف دوره</th>
                    <th scope="col">میانگین مصرف</th>
                    <th scope="col"> مصرف مجاز</th>
                    <th scope="col"> مصرف مازاد</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {persionConvertor(
                        Math.ceil(
                          (billData.currentReading - billData.previousReading) /
                            86400
                        )
                      )}
                    </td>
                    <td>
                      {persionConvertor(
                        billData.currentConsumption -
                          billData.previousConsumption
                      )}
                    </td>
                    <td>undefiend</td>
                    <td>undefiend</td>
                    <td>undefiend</td>
                  </tr>
                </tbody>
              </table>
              <div className="red-bg persian-num">
                <span>مبلغ به حروف</span>
                <p className="m-0">
                  {translateNumber(billData.payableAmount)} هزار ریال
                </p>
              </div>
            </div>
            <div className="col-3 p-0">
              <table className="table table-bordered blue-bg">
                <thead>
                  <tr>
                    <th scope="col">شناسه قبض</th>
                    <th scope="col">شناسه پرداخت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">{persionConvertor(billData.billingID)}</td>
                    <td>{persionConvertor(billData.paymentID)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3 p-0">
              <table className="table table-bordered red-bg">
                <thead>
                  <tr>
                    <th scope="col">مهلت پرداخت</th>
                    <th scope="col">مبلغ قابل پرداخت</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      {timeConverter(billData.paymentDeadline)}
                    </td>
                    <td>{persionConvertor(billData.payableAmount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2 p-2 border  rounded">
            <span>پیغام:</span>
            <span className="ml-2">
              مشترک گرامی برای دریافت قبض آب از طریق پیامک شناسه قبض آب خود را
              به شناسه ۱۰۰۰۱۵۲۲ یا ۲۰۰۰۰۰۱۲۲ پیامک کنید
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTemplate;

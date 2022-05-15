import "./styles.scss";
import "./loading.css";
import { useState } from "react";
import { Month } from "./components/Month";
import CurrencyFormat from "react-currency-format";
import Loading from "./components/Loading";
import initialData from "./data/default";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [monthData, setMonthData] = useState(initialData);
  const [total, setTotal] = useState(0);

  const getSalaryByMonth = () => {
    setMonthData();
  };

  const salaryHandleChangeByMonth = (values, reference) => {
    const clonedMonthData = [...monthData];

    const month = reference.current.props["data-month"];
    const id = reference.current.props["data-id"];
    const name = reference.current.props["data-name"];

    const newValue = {
      month,
      id,
      groassAmount: 0,
      deduction: 0,
      salaryEarned: 0
    };

    if (name === "grossAmount") {
      newValue.grossAmount = values.floatValue;
    } else {
      newValue.grossAmount = clonedMonthData[id].grossAmount;
    }

    if (name === "deduction") {
      newValue.deduction = values.floatValue;
    } else {
      newValue.deduction = clonedMonthData[id].deduction;
    }

    newValue.salaryEarned = parseFloat(
      newValue.grossAmount - newValue.deduction
    );

    clonedMonthData[newValue.id] = newValue;

    setMonthData((prevData) => clonedMonthData);
  };

  const calculate = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("calculating...");
    setTotal((prevTotal) => parseFloat(0));
    let rawTotal = parseFloat(0);

    monthData.forEach((entry) => {
      rawTotal += entry.salaryEarned;
    });

    rawTotal = rawTotal / 12;

    setTimeout(() => {
      console.log("Done calculating!");
      setTotal((prevTotal) => rawTotal);
      setLoading(false);
    }, 2000);
  };

  const reset = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Resetting...");
    const newData = initialData;
    setTimeout(() => {
      console.log("Done resetting!");
      setMonthData((prevData) => newData);
      setTotal((prevTotal) => parseFloat(0));
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className={`container mt-5 position-relative ${
        isLoading ? "loading" : ""
      }`}
      id="app-calculator"
    >
      <Loading isLoading={isLoading} />
      <div className="app-body-container position-relative">
        <h1>13-Month Pay Calculator</h1>
        <div className="table-responsive">
          <table
            className="table"
            disabled={isLoading ? isLoading : !isLoading}
          >
            <thead>
              <tr>
                <th>
                  Month
                  <br />
                  <small className="empty"> </small>
                </th>

                <th>
                  Basic Salary
                  <br />
                  <small>In PHP</small>
                </th>
                <th>
                  Deduction
                  <br />
                  <small>Due to absences/late</small>
                </th>

                <th>
                  Subtotal
                  <br />
                  <small>Salary earned for the month</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {monthData.map((data) => (
                <Month
                  key={data.id}
                  data={data}
                  isLoading={isLoading}
                  salaryHandleChangeByMonth={salaryHandleChangeByMonth}
                  getSalaryByMonth={getSalaryByMonth}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 d-flex align-content-center justify-content-between mb-5 flex-wrap">
          <div className="col col-12 col-lg-6">
            <button
              className="btn btn-primary inline"
              onClick={(e) => calculate(e)}
              disabled={isLoading ? true : false}
            >
              Calculate
            </button>
            <button
              className="inline btn btn-outline-secondary ms-2"
              disabled={isLoading ? true : false}
              onClick={(e) => reset(e)}
            >
              Reset
            </button>
          </div>

          <div className="col col-12 mt-3 mt-lg-0 col-lg-6 computation-holder text-lg-end">
            <div className="computation-prefix fw-bold">
              13-Month Pay for this year:
            </div>
            <CurrencyFormat
              className="computation text-end"
              disabled
              value={total}
              displayType={"text"}
              thousandSeparator={","}
              fixedDecimalScale={true}
              decimalScale={2}
              prefix={"₱"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

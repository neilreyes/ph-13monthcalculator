import "./styles.scss";
import { useState, useEffect } from "react";
import { Month } from "./components/Month";

const initialState = [
  {
    id: 1,
    month: "January",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 2,
    month: "February",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 3,
    month: "March",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 4,
    month: "April",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 5,
    month: "May",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 6,
    month: "June",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 7,
    month: "July",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 8,
    month: "August",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 9,
    month: "September",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 10,
    month: "October",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 11,
    month: "November",
    deduction: 0,
    salaryEarned: 0
  },
  {
    id: 12,
    month: "December",
    deduction: 0,
    salaryEarned: 0
  }
];

export default function App() {
  const [monthData, setMonthData] = useState(initialState);

  const getSalaryByMonth = () => {
    setMonthData();
  };

  return (
    <div className="container mt-5">
      <h1>13-Month Pay Calculator</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Month</th>
              <th>
                Basic Salary
                <br />
                <small>(in Php)</small>
              </th>
              <th>
                Deduction
                <br />
                <small>(due to absences or late)</small>
              </th>
              <th>Salary Earned for the Month</th>
            </tr>
          </thead>
          <tbody>
            {monthData.map((data) => (
              <Month
                key={data.id}
                data={data}
                getSalaryByMonth={getSalaryByMonth}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

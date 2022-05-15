import { useRef } from "react";
import CurrencyFormat from "react-currency-format";

export const Month = (props) => {
  const { data, salaryHandleChangeByMonth, isLoading } = props;
  const grossAmountRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <tr>
      <td>{data.month}</td>
      <td>
        <CurrencyFormat
          ref={grossAmountRef}
          value={data.grossAmount}
          thousandSeparator={true}
          prefix={"₱"}
          data-id={`${data.id}`}
          name={`${data.id}-grossAmount`}
          data-name="grossAmount"
          data-month={data.month}
          decimalScale={2}
          fixedDecimalScale={true}
          className="form-control"
          onValueChange={(values) =>
            salaryHandleChangeByMonth(values, grossAmountRef)
          }
        />
      </td>
      <td>
        <CurrencyFormat
          ref={inputRef}
          value={data.deduction}
          thousandSeparator={true}
          prefix={"₱"}
          data-id={`${data.id}`}
          className="form-control"
          name={`${data.id}-deduction`}
          data-name="deduction"
          data-month={data.month}
          decimalScale={2}
          fixedDecimalScale={true}
          onValueChange={(values) =>
            salaryHandleChangeByMonth(values, inputRef)
          }
        />
      </td>
      <td>
        <CurrencyFormat
          data-name="salaryEarned"
          data-month={data.month}
          data-id={`${data.id}`}
          className="form-control"
          name={`${data.id}-salaryEarned`}
          disabled
          value={data.salaryEarned}
          thousandSeparator={","}
          fixedDecimalScale={true}
          decimalScale={2}
          prefix={"₱"}
        />
      </td>
    </tr>
  );
};

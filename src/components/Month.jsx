export const Month = ({ data }) => {
  return (
    <tr>
      <td>January</td>
      <td>
        <input type="number" value="" placeholder="0" name="jan-basic-salary" />
      </td>
      <td>
        <input type="number" value="" placeholder="0" name="jan-deduction" />
      </td>
      <td>
        <input
          type="number"
          value=""
          placeholder="0"
          name="salary-for-jan"
          disabled
        />
      </td>
    </tr>
  );
};

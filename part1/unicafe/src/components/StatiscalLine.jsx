const StatiscalLine = (props) => {
  return (

      <tr>
        <td> {props.text}</td>
        <td>
          {props.value} {props.sign}
        </td>
      </tr>
  );
};
export default StatiscalLine;

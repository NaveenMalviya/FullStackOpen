import StatiscalLine from './StatiscalLine';

const Statistics = (props) => {
  const avg = props.all / 3;
  const positive = (props.good / props.all) * 100;
  return (
    <div>
      <table>
        <tbody>
          <StatiscalLine text='good' value={props.good} />
          <StatiscalLine text='netural' value={props.netural} />
          <StatiscalLine text='bad' value={props.bad} />
          <StatiscalLine text='all' value={props.all} />
          <StatiscalLine text='average' value={avg.toFixed(2)} />
          <StatiscalLine text='positive' value={positive.toFixed(2)} sign='%' />
        </tbody>
      </table>
    </div>
  );
};
export default Statistics;

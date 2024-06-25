const Total = (props) => {
  const total = props.course.parts.reduce((acc, { exercise }) => acc + exercise, 0);

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};
export default Total;

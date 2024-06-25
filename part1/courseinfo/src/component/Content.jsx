import Part from './Part';

const Content = (props) => {
  return (
    <>
      <Part title={props.course.parts[0].title} exercise={props.course.parts[0].exercise} />
      <Part title={props.course.parts[1].title} exercise={props.course.parts[1].exercise} />
      <Part title={props.course.parts[2].title} exercise={props.course.parts[2].exercise} />
    </>
  );
};
export default Content;

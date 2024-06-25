import Content from './component/Content';
import Header from './component/Header';
import Total from './component/Total';

const App = () => {
  const courseInfo = {
    course: 'Half stack application development',
    parts: [
      {
        title: 'Fundamental of React',
        exercise: 10,
      },
      {
        title: 'Usig props to pass data',
        exercise: 7,
      },
      {
        title: 'State of component',
        exercise: 15,
      },
    ],
  };

  return (
    <div> 
      <Header course={courseInfo} />
      <Content course={courseInfo} />
      <Total course={courseInfo} />
    </div>
  );
};

export default App;


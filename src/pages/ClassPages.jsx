import ClassComponent from '../components/ClassComponent.jsx'
import FaqComponent from '../components/FaqComponent.jsx';

const ClassPages = () => {
  return (
    <>
      <ClassComponent />
      {
        window.location.pathname.length !== 1 ? <FaqComponent /> : <div></div>
      }
    </>
  );
};

export default ClassPages;
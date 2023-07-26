import { Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import AllClassComponent from './components/AllClassComponent.jsx';

import IndexPages from './pages/IndexPages.jsx';
import ClassPages from './pages/ClassPages.jsx';
import FaqPages from './pages/FaqPages.jsx';
import TestimonialPages from './pages/TestimonialPages.jsx';
import TermPages from './pages/TermPages.jsx';

const App = () => {
  return (
    <div>
      < NavbarComponent />
      <Routes>
        <Route path="/" Component={IndexPages} />
        <Route path="/classes" Component={ClassPages} />
        <Route path="/all-classes" Component={AllClassComponent} />
        <Route path="/faq" Component={FaqPages} />
        <Route path="/testimonial" Component={TestimonialPages} />
        <Route path="/terms" Component={TermPages} />
      </Routes>
      < FooterComponent />
    </div>
  );
}

export default App;
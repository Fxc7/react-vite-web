import { Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import AllClassComponent from './components/AllClassComponent.jsx';
import AllTestimonialComponent from './components/TestimonialComponent.jsx';

import IndexPages from './pages/IndexPages.jsx';
import ClassPages from './pages/ClassPages.jsx';
import FaqPages from './pages/FaqPages.jsx';
import SwiperPages from './pages/SwiperPages.jsx';
import TosPages from './pages/TosPages.jsx';

const App = () => {
  return (
    <div>
      < NavbarComponent />
      <Routes>
        <Route path="/" Component={IndexPages} />
        <Route path="/class" Component={ClassPages} />
        <Route path="/all-class" Component={AllClassComponent} />
        <Route path="/faq" Component={FaqPages} />
        <Route path="/testimonial" Component={SwiperPages} />
        <Route path="/all-testimonial" Component={AllTestimonialComponent} />
        <Route path="/terms" Component={TosPages} />
      </Routes>
      < FooterComponent />
    </div>
  );
}

export default App;
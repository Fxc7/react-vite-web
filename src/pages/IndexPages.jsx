import ClassPages from './ClassPages.jsx';
import FaqPages from './FaqPages.jsx';
import TermPages from './TermPages.jsx';
import HomePages from './HomePages.jsx';

import SwiperComponent from '../components/SwiperComponent.jsx';

const IndexPages = () => {
    return (
        <div>
            <HomePages />
            <hr />
            <ClassPages />
            <hr />
            <SwiperComponent />
            <hr />
            <FaqPages />
            <hr />
            <TermPages />
            <hr />
        </div>
    );
};

export default IndexPages;
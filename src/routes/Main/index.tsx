import React from 'react';
import Header from '../../components/Main/Header';
import Content from '../../components/Main/Content';

import './index.scss';

const Main: React.FC = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <Content />
        </div>
    );
};

export default Main;

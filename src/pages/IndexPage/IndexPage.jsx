import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import { EclipseAnimation } from '../../components/eclipseAnimation/eclipseAnimation';

const IndexPage = () => (
    <Routes>
        <Route path="/" element={<EclipseAnimation />} />
    </Routes>
)

export default IndexPage;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import { EclipseAnimation } from '../../components/eclipseAnimation/eclipseAnimation';
import SolarEclipses from '../SolarEclipses/SolarEclipses';

const IndexPage = () => (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/animation" element={<EclipseAnimation />} />
        <Route path="/solarEclipses" element={<SolarEclipses />} />
    </Routes>
)

export default IndexPage;
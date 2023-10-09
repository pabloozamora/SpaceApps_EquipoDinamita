import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import SolarEclipses from '../SolarEclipses'

const IndexPage = () => (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/solarEclipses" element={<SolarEclipses />} />
    </Routes>
)

export default IndexPage;
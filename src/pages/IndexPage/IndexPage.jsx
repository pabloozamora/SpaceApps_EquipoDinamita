import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../WelcomePage';
import MazePage from '../MazePage/MazePage';

const IndexPage = () => (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/maze" element={<MazePage />} />
    </Routes>
)

export default IndexPage;
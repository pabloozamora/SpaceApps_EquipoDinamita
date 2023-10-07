import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from '../WelcomePage';

const IndexPage = () => (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
    </Routes>
)

export default IndexPage;
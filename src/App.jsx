import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '@pages/Loading';
import { publicRoutes } from './routes';
import './App.scss';

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.page />} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default App;

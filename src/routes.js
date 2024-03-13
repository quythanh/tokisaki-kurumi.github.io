import { lazy } from 'react';

const Home = lazy(() => import('@pages/Home'));

const publicRoutes = [
    {
        path: '/',
        page: Home,
    },
];

export { publicRoutes };

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig';

const AppRouter = () => (
    <Suspense fallback={<span>loading...</span>}>
        <Routes>
            {routeConfig.map(({ path ,element }) =>
                <Route path={path} element={element} key={path} />)
            }
        </Routes>
    </Suspense>
);

export default AppRouter;
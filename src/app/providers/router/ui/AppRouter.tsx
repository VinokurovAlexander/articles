import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig';
import { Loader } from 'shared/ui/Loader';

const AppRouter = () => (
    <Suspense fallback={<Loader />}>
        <Routes>
            {routeConfig.map(({ path ,element }) =>
                <Route path={path} element={element} key={path} />)
            }
        </Routes>
    </Suspense>
);

export default AppRouter;

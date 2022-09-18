import {Route, Routes} from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig";

const AppRouter = () => (
    <Routes>
        {routeConfig.map(({ path ,element}) =>
            <Route path={path} element={element} key={path} />)
        }
    </Routes>
)

export default AppRouter;
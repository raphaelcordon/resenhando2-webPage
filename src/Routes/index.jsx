import { BrowserRouter, Route, Routes } from "react-router-dom";
import _BaseLayout from "./_BaseLayout/index.jsx";
import Home from "./Home/index.jsx";
import NotFound from "./NotFound/index.jsx";
import ProtectedRoutes from "./ProtectedRoutes/index.jsx";
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<_BaseLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                <Route path="*" element={<NotFound />} />
                
                <Route element={<ProtectedRoutes />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
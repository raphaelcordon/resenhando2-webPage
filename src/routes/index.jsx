import { BrowserRouter, Route, Routes } from "react-router-dom";
import _BaseLayout from "./_baseLayout/index.jsx";
import Home from "./home/index.jsx";
import Login from "./login/index.jsx";
import Register from "./register/index.jsx";
import NotFound from "./notFound/index.jsx";
import ProtectedRoutes from "./protectedRoutes/index.jsx";
import MainArtistsComponent from "../components/Main/MainArtistsComponent.jsx";
const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<_BaseLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/artists" element={<MainArtistsComponent />} />
                </Route>

                <Route path="*" element={<NotFound />} />
                
                <Route element={<ProtectedRoutes />}>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
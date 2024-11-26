import { BrowserRouter, Route, Routes } from "react-router-dom";
import _BaseLayout from "./_baseLayout/index.jsx";
import Home from "./home/index.jsx";
import Login from "./login/index.jsx";
import Register from "./register/index.jsx";
import NotFound from "./notFound/index.jsx";
import ProtectedRoutes from "./protectedRoutes/index.jsx";
import MainArtistsComponent from "../components/Main/MainArtistsComponent.jsx";
import MainAlbumsComponent from "../components/Main/MainAlbumsComponent.jsx";
import MainTracksComponent from "../components/Main/MainTracksComponent.jsx";
import Review from "./Review/index.jsx";
import NewReview from "./NewReview/NewReview.jsx";
import ScrollToTop from "../hooks/ScrollToTop.jsx";
const Router = () => {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<_BaseLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/artists" element={<MainArtistsComponent />} />
                    <Route path="/albums" element={<MainAlbumsComponent />} />
                    <Route path="/tracks" element={<MainTracksComponent />} />
                    <Route path="/review/:id" element={<Review />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/newreview" element={<NewReview />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
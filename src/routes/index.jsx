import { BrowserRouter, Route, Routes } from "react-router-dom";
import _BaseLayout from "./_baseLayout/index.jsx";
import Home from "./home/index.jsx";
import Login from "./login/index.jsx";
import Register from "./register/index.jsx";
import NotFound from "./notFound/index.jsx";
import ProtectedRoutes from "./protectedRoutes/index.jsx";
import MainArtistsComponent from "../components/main/mainArtistsComponent.jsx";
import MainAlbumsComponent from "../components/main/mainAlbumsComponent.jsx";
import MainTracksComponent from "../components/main/mainTracksComponent.jsx";
import Review from "./review/index.jsx";
import NewReview from "./newReview/index.jsx";
import ScrollToTop from "../hooks/common/scrollToTop.js";
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
                    <Route path="/review/" element={<Home />} />
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import _BaseLayout from "./pages/_baseLayout/";
import Home from "./pages/home/";
import Login from "./pages/login/";
import Register from "./pages/register/";
import NotFound from "./pages/notFound/";
import ProtectedRoutes from "./pages/protectedRoutes/";
import MainArtistsComponent from "./components/main/mainArtistsComponent.jsx";
import MainAlbumsComponent from "./components/main/mainAlbumsComponent.jsx";
import MainTracksComponent from "./components/main/mainTracksComponent.jsx";
import Review from "./pages/review/";
import NewReview from "./pages/newReview/";
import ScrollToTop from "./hooks/common/scrollToTop.js";
import ReviewWriteArtist from "./pages/review/reviewWritingRoutes/reviewWriteArtist.jsx";
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
                    <Route path="/reviewWriteArtist/" element={<Home />} />
                    <Route path="/review/:id" element={<Review />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/newreview" element={<NewReview />} />
                        <Route path="/reviewWriteArtist/:id" element={<ReviewWriteArtist />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
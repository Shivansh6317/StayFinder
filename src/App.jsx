import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import HotelDetails from "./pages/HotelDetails";
import NotFound from "./pages/NotFound";

export default function App() {

    return (

        <>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/wishlist" element={<Wishlist />} />

                <Route
                    path="/hotel/:id"
                    element={<HotelDetails />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Footer />

        </>

    );

}
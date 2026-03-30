import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../../pages/home/ui/HomePage.tsx";
import {Navbar} from "../../../widgets/Navbar";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};
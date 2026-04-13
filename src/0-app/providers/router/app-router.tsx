import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/1-pages/home";
import { Navbar } from "@/2-widgets/navbar";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

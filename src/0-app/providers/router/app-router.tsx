import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/1-pages/home";
import { Navbar } from "@/2-widgets/navbar";

export const AppRouter = () => {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};

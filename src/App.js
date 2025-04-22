import Header from "./components/header/Header";
import FavoriteCities from "./components/FavoriteCities";
import About from "./components/About";
import NotFound from "./components/NotFound";
import AllCities from "./components/allCitiesPage/AllCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={<FavoriteCities/>}/>
                        <Route path="/AllCities" element={<AllCities/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;

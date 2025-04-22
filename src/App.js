import Header from "./components/header/Header";
import FavoriteCities from "./components/FavoriteCities";
import About from "./components/About";
import NotFound from "./components/NotFound";
import AllCities from "./components/allCitiesPage/AllCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [cities, setCities] = useState([]);

    // Load cities from localStorage on component mount
    useEffect(() => {
        const savedCities = localStorage.getItem('weatherCities');
        if (savedCities) {
            setCities(JSON.parse(savedCities));
        }
    }, []);

    // Save cities to localStorage whenever the cities state changes
    useEffect(() => {
        localStorage.setItem('weatherCities', JSON.stringify(cities));
    }, [cities]);


    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route index element={
                            <FavoriteCities
                                cities={cities}
                            />
                        }/>
                        <Route path="/AllCities" element={
                            <AllCities
                                cities={cities}
                                setCities={setCities}
                            />
                        }/>
                        <Route path="/About" element={<About/>}/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default App;

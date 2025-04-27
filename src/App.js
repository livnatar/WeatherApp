import Header from "./components/header/Header";
import FavoriteCities from "./components/favoriteCities/FavoriteCities";
import About from "./components/About";
import NotFound from "./components/NotFound";
import AllCities from "./components/allCitiesPage/AllCities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {useEffect, useState} from "react";

function App() {

    // const [cities, setCities] = useState([]);
    //
    // // Load cities from localStorage on component mount
    // useEffect(() => {
    //     const savedCities = localStorage.getItem('weatherCities');
    //     if (savedCities) {
    //         setCities(JSON.parse(savedCities));
    //     }
    // }, []);

    // Initialize cities with an empty array - we'll load from localStorage first
    const [cities, setCities] = useState(() => {
        // This function runs only once during initial render
        try {
            const savedCities = localStorage.getItem('weatherCities');
            return savedCities ? JSON.parse(savedCities) : [];
        } catch (error) {
            console.error("Failed to load cities from localStorage:", error);
            return [];
        }
    });

    // Save cities to localStorage whenever the cities state changes
    useEffect(() => {
        try {
            localStorage.setItem('weatherCities', JSON.stringify(cities));
        } catch (error) {
            console.error("Failed to save cities to localStorage:", error);
        }
    }, [cities]);


    return (
        <div className="App">
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
        </div>
    );
}


export default App;

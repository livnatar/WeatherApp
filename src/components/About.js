
import React from "react";

function About() {
    return (
        <div className="container my-5">
            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <h1 className="card-title mb-4">About This App</h1>

                    <p className="lead">
                        This app is a simple and user-friendly tool for managing your favorite cities
                        and viewing their 7-day weather forecasts using an external weather API.
                        It's built with React and styled using Bootstrap for a responsive experience.
                    </p>

                    <h3 className="mt-4">What Can You Do?</h3>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">Add, edit, or delete cities in your list</li>
                        <li className="list-group-item">Mark cities as favorites and view them</li>
                        <li className="list-group-item">Filter cities by country using a dropdown menu</li>
                        <li className="list-group-item">View a detailed 7-day forecast for each city</li>
                        <li className="list-group-item">See daily weather details: date, forecast icon, min and max temperature</li>
                    </ul>


                    <h3 className="mt-5">Created by:</h3>
                    <p className="mb-0">Ophek Alon and Livnat Arama</p>
                </div>
            </div>
        </div>
    );
}

export default About;



// /**
//  * About Page - Project Description
//  * @returns {JSX.Element}
//  * @constructor
//  */
// function About() {
//     return (
//         <div>
//             <h1>About the App</h1>
//             <p>This is a simple React app we built to manage a list of cities and display 7-day weather forecasts using an external API.</p>
//
//             <h3>Features:</h3>
//             <ul>
//                 <li>View favorite cities (sorted A–Z)</li>
//                 <li>Filter by country with a dropdown + reset option</li>
//                 <li>View weather for each city: date, forecast, min/max temperature</li>
//                 <li>Add, edit, delete cities</li>
//                 <li>Mark/unmark favorites</li>
//             </ul>
//
//             <p>
//                 We used React Router for page navigation, Bootstrap for responsive design, and local storage to save city data.
//                 Validation is done for all input fields in the form.
//             </p>
//
//             <h3>Created by:</h3>
//             <ul>
//                 <li>Ophek Alon</li>
//                 <li>Livnat Arama</li>
//             </ul>
//         </div>
//     );
// }
//
// export default About;

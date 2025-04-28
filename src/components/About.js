// /**
//  * A simple static component.
//  * @returns {JSX.Element}
//  * @constructor
//  */
// function About() {
//     return (
//         <div>
//             <h1>Ophek and Livnat</h1>
//             <p>What is a React Component?</p>
//             <p>A React Component is a small piece of code that is used to render a single piece of UI.
//                 It is a self-contained unit of UI that can be rendered on its own, or it can be rendered inside of another component.
//                 A React Component is implemented as class that extends React.Component OR as a function (the new way).
//                 A React element can be a HTML element, a component, or a combination of both.
//                 A React element can also be a fragment, which is a container for other elements.
//             </p>
//         </div>
//     );
// }
//
// export default About;
/**
 * About Page - Project Description
 * @returns {JSX.Element}
 * @constructor
 */
function About() {
    return (
        <div>
            <h1>About the App</h1>
            <p>This is a simple React app we built to manage a list of cities and display 7-day weather forecasts using an external API.</p>

            <h3>Features:</h3>
            <ul>
                <li>View favorite cities (sorted A–Z)</li>
                <li>Filter by country with a dropdown + reset option</li>
                <li>View weather for each city: date, forecast, min/max temperature</li>
                <li>Add, edit, delete cities</li>
                <li>Mark/unmark favorites</li>
            </ul>

            <p>
                We used React Router for page navigation, Bootstrap for responsive design, and local storage to save city data.
                Validation is done for all input fields in the form.
            </p>

            <h3>Created by:</h3>
            <ul>
                <li>Ophek Alon</li>
                <li>Livnat Arama</li>
            </ul>
        </div>
    );
}

export default About;

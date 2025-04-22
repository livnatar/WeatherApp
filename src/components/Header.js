import {Link} from 'react-router-dom';
import {Outlet} from "react-router";

export default function Header(props) {

    return (
        <div>
            <h1>An example of browser-router</h1>

            <Link to="/">Favorite Cities</Link> {' '} | {' '}
            <Link to="/AllCities">All Cities</Link> {' '} | {' '}
            <Link to="/About">About</Link>

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />

        </div>
    );
}
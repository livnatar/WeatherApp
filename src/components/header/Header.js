
import { Outlet } from "react-router";
//import AppTitle from './AppTitle';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';

/**
 * The main layout header component for the application.
 * It includes the navigation bar and renders nested route content.
 *
 * This component uses React Router's `<Outlet />` to display child routes
 * and Bootstrap's `<Container />` for layout styling.
 *
 * @component
 * @param {Object} props - React props (currently unused).
 * @returns {JSX.Element} The header layout including the navigation bar and routed content.
 * @constructor
 */
export default function Header(props) {
    return (
        <>
            {/* Combined NavBar with Title */}
            <NavigationBar/>

            {/* Content Area */}
            <Container fluid className="mt-4 px-5">
                <Outlet/>
            </Container>
        </>
    );
}
// {/* Title Row Component */}
// <AppTitle/>

import { Outlet } from "react-router";
import AppTitle from './AppTitle';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';

export default function Header(props) {
    return (
        <>
            {/* Title Row Component */}
            <AppTitle/>

            {/* Navigation Bar Component */}
            <NavigationBar/>

            {/* Content Area */}
            <Container fluid className="mx-3 mt-3">
                <Outlet/>
            </Container>
        </>
    );
}
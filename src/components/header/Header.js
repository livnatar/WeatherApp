
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
            <Container fluid className="mt-4 px-5">
                <Outlet/>
            </Container>
        </>
    );
}
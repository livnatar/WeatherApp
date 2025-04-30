
import { Outlet } from "react-router";
//import AppTitle from './AppTitle';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';

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
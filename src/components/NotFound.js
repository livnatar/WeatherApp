
/**
 * A fallback component displayed when a user navigates to an undefined route.
 *
 * @component
 * @param {Object} props - React props (not used in this component).
 * @returns {JSX.Element} A message indicating the page was not found.
 * @constructor
 */
export default function NotFound(props) {
    // return (
    //     <div>
    //         <h1>Page not found!</h1>
    //     </div>
    // );
    return (
        <div className="container my-5">
            <div className="card shadow-sm border-0">
                <div className="card-body text-center">
                    <h1 className="card-title display-4 text-danger mb-3">404</h1>
                    <h2 className="mb-4">Page Not Found</h2>
                    <p className="lead mb-4">
                        Sorry, the page you're looking for doesn't exist or has been moved.
                    </p>
                    <p className="text-muted mb-0">
                        Please check the URL or use the navigation bar above to find your way.
                    </p>
                </div>
            </div>
        </div>
    );
}

/**
 * A fallback component displayed when a user navigates to an undefined route.
 *
 * @component
 * @param {Object} props - React props (not used in this component).
 * @returns {JSX.Element} A message indicating the page was not found.
 * @constructor
 */
export default function NotFound(props) {
    return (
        <div>
            <h1>Page not found!</h1>
        </div>
    );
}
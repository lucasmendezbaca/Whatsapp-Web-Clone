import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
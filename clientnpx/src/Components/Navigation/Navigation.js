import { Link } from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Chats">Chats</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
import "./Header.css";
import {Link} from "react-router-dom";


export default function Header() {

    return(
        <ul className="links">
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/open"}>Open</Link></li>
            <li><Link to={"/doing"}>Doing</Link></li>
            <li><Link to={"/done"}>Done</Link></li>
        </ul>
    )
}
import "./Header.css";
import {Link} from "react-router-dom";


export default function Header() {

    return(
        <ul className="links">
            <li><Link to={"/Home"}>Home</Link></li>
            <li><Link to={"/Open"}>Open</Link></li>
            <li><Link to={"/Doing"}>Doing</Link></li>
            <li><Link to={"/Done"}>Done</Link></li>
            <li><Link to={"/New"}>New</Link></li>
        </ul>
    )
}
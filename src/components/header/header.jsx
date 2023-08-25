import { logo } from "../assets";
import './header.css'

export default function Header(){
    return(
        <header>
            <img src={logo} width={100} alt="" />
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </header>
    )
}
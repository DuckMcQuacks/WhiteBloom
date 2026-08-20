import { NavLink } from "react-router-dom";
import LotusSVG from "../images/svg/lotus.svg"
import "../Styles/navbar.css"

export default function Navbar() {
  return (
    <nav>
      <div className="navbarInner">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <span className="logoIcon">
            <img src = {LotusSVG}/>
          </span>
          <span className="logoText">WHITE BLOOM</span>
        </NavLink>

        {/* Navigation */}
        <ul className="navbarLinks">
          <li>
            <NavLink to="/noi-fodraszat">NŐI FODRÁSZAT</NavLink>
          </li>

          <li>
            <NavLink to="/barber">BARBER</NavLink>
          </li>

          <li>
            <NavLink to="/labapolas">LÁBÁPOLÁS</NavLink>
          </li>

          <li>
            <NavLink to="/rolunk">RÓLUNK</NavLink>
          </li>

          <li>
            <NavLink to="/kapcsolat">KAPCSOLAT</NavLink>
          </li>
        </ul>

        {/* Appointment button */}
        <NavLink to="/idopontfoglalas" className="bookingButton">
          IDŐPONTFOGLALÁS
        </NavLink>
      </div>
    </nav>
  );
}
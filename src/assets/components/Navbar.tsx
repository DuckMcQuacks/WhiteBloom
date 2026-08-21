import { NavLink } from "react-router-dom";
import LotusSVG from "../images/svg/lotus.svg"
import {useState, useEffect, useRef} from "react"
import "../Styles/navbar.css"

export default function Navbar() {
    const [width , setWidth] = useState(window.innerWidth)
    const [isActive, setActive] = useState(false)
    const navbarRef = useRef<HTMLElement>(null)
  
    //Conditional rendering for cross-Device compatibility regarding phones
    useEffect(() => {
        let cb = function () {
          setWidth(window.innerWidth);
          //Handle corner case bug regarding menu
          setActive(width > 1020 ? isActive : false)
        };
        window.addEventListener("resize", cb);
      
        return () => {
          window.removeEventListener("resize", cb);
        };
      }, []);

      useEffect(() => {
        if (!isActive) {
          return
        }

        function handleOutsidePointer(event: PointerEvent) {
          if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
            setActive(false)
          }
        }

        document.addEventListener("pointerdown", handleOutsidePointer)

        return () => {
          document.removeEventListener("pointerdown", handleOutsidePointer)
        }
      }, [isActive]);

      //Dealing with the mobile version of navbar, hiding and showing the menu
      function clickHandler()
      {
        setActive(!isActive)
      }
  return (
    <>
    <nav ref={navbarRef}>
      <div className="navbarInner">
        <NavLink to="/" className="logo">
          <span className="logoIcon">
            <img src = {LotusSVG}/>
          </span>
          <span className="logoText">WHITE BLOOM</span>
        </NavLink>
        {width > 1020?
        <>
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

        <NavLink to="/idopontfoglalas" className="bookingButton">
          IDŐPONTFOGLALÁS
        </NavLink>
        </> :
        <>
          <div className={("fill")+(isActive ? " active" : "")} onClick={clickHandler}></div>
          <div className={isActive ? "mobileMenu" : "mobileMenu hidden"}>
            <ul className="mobileMenuLinks">
              <li><NavLink to="/noi-fodraszat" onClick={clickHandler}>NŐI FODRÁSZAT</NavLink></li>
              <li><NavLink to="/barber" onClick={clickHandler}>BARBER</NavLink></li>
              <li><NavLink to="/labapolas" onClick={clickHandler}>LÁBÁPOLÁS</NavLink></li>
              <li><NavLink to="/rolunk" onClick={clickHandler}>RÓLUNK</NavLink></li>
              <li><NavLink to="/kapcsolat" onClick={clickHandler}>KAPCSOLAT</NavLink></li>
              <li>
                <NavLink to="/idopontfoglalas" className="mobileBookingButton" onClick={clickHandler}>
                  IDŐPONTFOGLALÁS
                </NavLink>
              </li>
            </ul>
          </div>
        </>
        }
      </div>
    </nav>
    </>
  );
}
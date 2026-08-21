
import { NavLink } from "react-router-dom"
import LotusSVG from "../images/svg/lotus.svg"
import InstagramSVG from "../images/svg/instagram.svg"
import FacebookSVG from "../images/svg/facebook.svg"
import "../Styles/footer.css"

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerBrand">
          <NavLink to="/" className="footerLogo">
            <img src={LotusSVG} alt="" />
            <span>WHITE BLOOM</span>
          </NavLink>
          <p>PIHENÉS. MEGÚJÚLÁS. TE.</p>
        </div>

        <div className="footerColumn">
          <h2>KAPCSOLAT</h2>
          <address>
            <a href="tel:+3612345678">+36 30 123 4567</a>
            <a href="mailto:hello@whitebloom.hu">hello@whitebloom.hu</a>
            <span>1111 Budapest, Példa utca 1.</span>
          </address>
          <div className="footerSocials" aria-label="Közösségi oldalak">
            <a href="#instagram" aria-label="Instagram">
              <img src={InstagramSVG} alt="Instagram" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <img src={FacebookSVG} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="footerColumn">
          <h2>NYITVATARTÁS</h2>
          <dl className="openingHours">
            <div><dt>Hétfő - Péntek</dt><dd>9:00 - 20:00</dd></div>
            <div><dt>Szombat</dt><dd>9:00 - 16:00</dd></div>
            <div><dt>Vasárnap</dt><dd>Zárva</dd></div>
          </dl>
        </div>

        <div className="footerColumn">
          <h2>INFORMÁCIÓK</h2>
          <nav className="footerLinks" aria-label="Footer navigáció">
            <a href="#adatvedelem">Adatvédelmi tájékoztató</a>
            <a href="#altalanos-szerzodesi-feltetelek">Általános szerződési feltételek</a>
            <a href="#impressum">Impresszum</a>
          </nav>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2025 White Bloom. Minden jog fenntartva.</span>
      </div>
    </footer>
  );
}
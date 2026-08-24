import { NavLink } from "react-router-dom";
import HeroImage from "../images/HeroImage.png"
import WomensHairdresserImage from "../images/WomensHairdresserImage.jpg"
import BarberImage from "../images/BarberImage.jpg"
import FootCareImage from "../images/FootCareImage.jpg"
import MaleImage from "../images/MaleImage.jpg"
import FemaleImage from "../images/FemaleImage.jpg"
import Services from "../components/Services"
import "../Styles/home.css"

export default function Home() {
  return (
    <main className="home">

      <section className="hero">
        <div className="heroContent">
          <h1>
            WHITE
            <br />
            BLOOM
          </h1>

          <h2>PIHENÉS. MEGÚJULÁS. TE.</h2>

          <p>
            Egy hely, ahol rólad szól minden.
            <br />
            Prémium szolgáltatások, szakértelem
            <br />
            és törődés a legszebb önmagadért.
          </p>

          <NavLink to="/idopontfoglalas" className="homeButton">
            IDŐPONTFOGLALÁS
            <span>→</span>
          </NavLink>
        </div>

        <div className="heroImage">
          <img
            src={HeroImage}
          />
        </div>
      </section>


      <section className="services">
        <h2 className="sectionTitle">SZOLGÁLTATÁSAINK</h2>

        <div className="serviceGrid">

          <Services
            image={WomensHairdresserImage}
            alt="Női fodrászat"
            title="NŐI FODRÁSZAT"
            description="Vágás, festés, stílus - Fedezze fel szépségét!"
            to="/noi-fodraszat"
          />

          <Services
            image={BarberImage}
            alt="Barber szolgáltatás"
            title="BARBER SZOLGÁLTATÁS"
            description="Hajvágás, borotválás, szakállápolás - Modern stílus uraknak."
            to="/barber"
          />

          <Services
            image={FootCareImage}
            alt="Lábápolás"
            title="LÁBÁPOLÁS"
            description="Pedikűr, kényeztető kezelések - Lépjen a könnyedségbe!"
            to="/labapolas"
          />

        </div>
      </section>

      <section className="about">

        <div className="aboutImage">
          <img
            src={HeroImage}
            alt="White Bloom szalon belső tere"
          />
        </div>

        <div className="aboutContent">
          <span className="eyebrow">RÓLUNK</span>

          <h2>
            A SZÉPSÉG TÖBB,
            <br />
            MINT KÜLSŐ.
          </h2>

          <p>
            Hiszünk abban, hogy a szépség belülről
            fakad, mi pedig segítünk, hogy ez kívül is
            ragyogjon. Szakembereink elhivatottsággal,
            folyamatos megújulással és személyre szabott
            figyelemmel várják Önt.
          </p>

          <NavLink to="/rolunk" className="homeButton">
            TÖBBET SZERETNÉK TUDNI
            <span>→</span>
          </NavLink>
        </div>

      </section>


      <section className="team">

        <h2 className="sectionTitle">SZAKEMBEREINK</h2>

        <div className="teamGrid">

          <div className="teamMember">
            <img src={FemaleImage} alt="Anna" />
            <h3>ANNA</h3>
            <p>Senior Stylist</p>
          </div>

          <div className="teamMember">
            <img src={FemaleImage} alt="Viktória" />
            <h3>VIKTÓRIA</h3>
            <p>Stylist</p>
          </div>

          <div className="teamMember">
            <img src={FemaleImage} alt="Dóra" />
            <h3>DÓRA</h3>
            <p>Color Specialist</p>
          </div>

          <div className="teamMember">
            <img src={MaleImage} alt="Márk" />
            <h3>MÁRK</h3>
            <p>Barber</p>
          </div>

          <div className="teamMember">
            <img src={MaleImage} alt="Balázs" />
            <h3>BALÁZS</h3>
            <p>Barber</p>
          </div>

          <div className="teamMember">
            <img src={FemaleImage} alt="Kinga" />
            <h3>KINGA</h3>
            <p>Lábápoló</p>
          </div>

        </div>

        <NavLink to="/szakembereink" className="homeButton">
          ÖSSZES SZAKEMBER MEGTEKINTÉSE
          <span>→</span>
        </NavLink>

      </section>

      <section className="booking">
        <div className="bookingOverlay">
          <h2>
            FOGLALJ IDŐPONTOT
            <br />
            ÉS ÉLD ÁT A WHITE BLOOM ÉLMÉNYT!
          </h2>

          <NavLink to="/idopontfoglalas" className="bookingButtonHome">
            IDŐPONTFOGLALÁS
            <span>→</span>
          </NavLink>
        </div>
      </section>

    </main>
  );
}
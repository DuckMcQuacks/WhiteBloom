import { NavLink } from "react-router-dom";
import HeroImage from "../images/HeroImage.png"
import WomensHairdresserImage from "../images/WomensHairdresserImage.jpg"
import BarberImage from "../images/BarberImage.jpg"
import FootCareImage from "../images/FootCareImage.jpg"
import "../Styles/home.css"

export default function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-content">
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

          <NavLink to="/idopontfoglalas" className="home-button">
            IDŐPONTFOGLALÁS
            <span>→</span>
          </NavLink>
        </div>

        <div className="hero-image">
          <img
            src={HeroImage}
          />
        </div>
      </section>


      {/* ================= SERVICES ================= */}

      <section className="services">
        <h2 className="section-title">SZOLGÁLTATÁSAINK</h2>

        <div className="service-grid">

          <article className="service-card">
            <img
              src={WomensHairdresserImage}
              alt="Női fodrászat"
            />

            <div className="service-content">
              <h3>NŐI FODRÁSZAT</h3>

              <p>
                Vágás, festés, stílus – Fedezze fel
                szépségét!
              </p>

              <NavLink to="/noi-fodraszat" className="small-button">
                TOVÁBB
              </NavLink>
            </div>
          </article>


          <article className="service-card">
            <img
              src={BarberImage}
              alt="Barber szolgáltatás"
            />

            <div className="service-content">
              <h3>BARBER SZOLGÁLTATÁS</h3>

              <p>
                Hajvágás, borotválás, szakállápolás –
                Modern stílus uraknak.
              </p>

              <NavLink to="/barber" className="small-button">
                TOVÁBB
              </NavLink>
            </div>
          </article>


          <article className="service-card">
            <img
              src={FootCareImage}
              alt="Lábápolás"
            />

            <div className="service-content">
              <h3>LÁBÁPOLÁS</h3>

              <p>
                Pedikűr, kényeztető kezelések –
                Lépjen a könnyedségbe!
              </p>

              <NavLink to="/labapolas" className="small-button">
                TOVÁBB
              </NavLink>
            </div>
          </article>

        </div>
      </section>


      {/* ================= ABOUT ================= */}

      <section className="about">

        <div className="about-image">
          <img
            src="/images/salon.jpg"
            alt="White Bloom szalon belső tere"
          />
        </div>

        <div className="about-content">
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

          <NavLink to="/rolunk" className="home-button">
            TÖBBET SZERETNÉK TUDNI
            <span>→</span>
          </NavLink>
        </div>

      </section>


      {/* ================= TEAM ================= */}

      <section className="team">

        <h2 className="section-title">SZAKEMBEREINK</h2>

        <div className="team-grid">

          <div className="team-member">
            <img src="/images/anna.jpg" alt="Anna" />
            <h3>ANNA</h3>
            <p>Senior Stylist</p>
          </div>

          <div className="team-member">
            <img src="/images/viktoria.jpg" alt="Viktória" />
            <h3>VIKTÓRIA</h3>
            <p>Stylist</p>
          </div>

          <div className="team-member">
            <img src="/images/dora.jpg" alt="Dóra" />
            <h3>DÓRA</h3>
            <p>Color Specialist</p>
          </div>

          <div className="team-member">
            <img src="/images/mark.jpg" alt="Márk" />
            <h3>MÁRK</h3>
            <p>Barber</p>
          </div>

          <div className="team-member">
            <img src="/images/balazs.jpg" alt="Balázs" />
            <h3>BALÁZS</h3>
            <p>Barber</p>
          </div>

          <div className="team-member">
            <img src="/images/kinga.jpg" alt="Kinga" />
            <h3>KINGA</h3>
            <p>Lábápoló</p>
          </div>

        </div>

        <NavLink to="/szakembereink" className="home-button">
          ÖSSZES SZAKEMBER MEGTEKINTÉSE
          <span>→</span>
        </NavLink>

      </section>


      {/* ================= BOOKING CTA ================= */}

      <section className="booking">
        <div className="booking-overlay">
          <h2>
            FOGLALJ IDŐPONTOT
            <br />
            ÉS ÉLD ÁT A WHITE BLOOM ÉLMÉNYT!
          </h2>

          <NavLink to="/idopontfoglalas" className="booking-button-home">
            IDŐPONTFOGLALÁS
            <span>→</span>
          </NavLink>
        </div>
      </section>

    </main>
  );
}
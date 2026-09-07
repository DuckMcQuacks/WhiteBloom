import { useParams } from "react-router-dom";
import professionals from "../dataFiles/professionals.json";
import toSlug from "../helperFunctions/toSlug";
import { NavLink } from "react-router-dom";
import "../Styles/detailedProfessional.css";

const imageFiles = import.meta.glob("../images/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const profileImages = Object.fromEntries(
  Object.entries(imageFiles).map(([path, url]) => [
    path.split("/").pop()?.replace(/\.[^.]+$/, ""),
    url,
  ]),
) as Record<string, string>;


export default function DetailedProfessional() {
  const { professionalRef } = useParams();
  const professional = professionals.find(
    (person) =>
      String(person.id) === professionalRef ||
      toSlug(person.name) === professionalRef?.toLowerCase(),
  );

  if (!professional) {
    return (
      <main className="professionalPage professionalPage--missing">
        <p>Professional not found.</p>
      </main>
    );
  }

  return (
    <main className="professionalPage">
      <div className="professionalIntro">
        <p className="professionalEyebrow">SZAKEMBER PROFIL</p>

        <div className="professionalHero">
          <div className="professionalPortraitWrap">
            <img
              className="professionalPortrait"
              src={profileImages[professional.image.replace(/\.[^.]+$/, "")]}
              alt={professional.name}
            />
          </div>

          <div className="professionalSummary">
            <p className="professionalRole">{professional.group}</p>
            <h1>{professional.name}</h1>
            <p className="professionalTitle">{professional.title}</p>
            <p className="professionalDescription">{professional.description}</p>

            <div className="professionalSocials" aria-label="Social media links">
              <a href={professional.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                IG
              </a>
              <a href={professional.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                FB
              </a>
              <a href={`mailto:${professional.email}`} aria-label="Email">
                @
              </a>
            </div>

            <NavLink className="professionalBooking" to="/idopontfoglalas">
              IDŐPONTFOGLALÁS <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      </div>

      <section className="professionalDetails">
        <div className="professionalSpecialties">
          <p className="professionalSectionLabel">SPECIALITÁSOK</p>
          <ul>
            {professional.specialties.map((specialty) => (
              <li key={specialty}>{specialty}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="professionalGallery">
        <p className="professionalSectionLabel">MUNKÁI</p>
        <div className="professionalGalleryGrid">
          {[professional.image, "WomensHairdresserImage", "FemaleImage"].map((imageName, index) => (
            <img
              key={`${imageName}-${index}`}
              src={profileImages[imageName.replace(/\.[^.]+$/, "")]}
              alt={`${professional.name} munkája ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
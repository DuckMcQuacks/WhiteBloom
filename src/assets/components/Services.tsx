
import { NavLink } from "react-router-dom";

type ServicesProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  to: string;
};

export default function Services({image, alt, title, description, to}: ServicesProps) {
  return (
    <article className="serviceCard">
      <img src={image} alt={alt} />

      <div className="serviceContent">
        <h3>{title}</h3>

        <p>{description}</p>

        <NavLink to={to} className="smallButton">
          TOVÁBB
        </NavLink>
      </div>
    </article>
  );
}
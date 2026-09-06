
import { NavLink } from "react-router-dom";
import FemaleImage from "../images/FemaleImage.jpg";

type SpecialistsCardProps = {
  id: number;
  name: string;
  title: string;
};


export default function SpecialistsCard({ id, name, title }: SpecialistsCardProps) {

  return (
    <NavLink to="/szakembereink" className="teamMember" state={{ specialistId: id }}>
      <img src={FemaleImage} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </NavLink>
  );
}
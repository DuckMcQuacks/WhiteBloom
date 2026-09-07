
import { NavLink } from "react-router-dom";
import toSlug from "../helperFunctions/toSlug";

const imageFiles = import.meta.glob("../images/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const specialistImages = Object.fromEntries(
  Object.entries(imageFiles).map(([path, url]) => [
    path.split("/").pop()?.replace(/\.[^.]+$/, ""),
    url,
  ]),
) as Record<string, string>;

type SpecialistsCardProps = {
  id: number;
  name: string;
  title: string;
  image: string;
};


export default function SpecialistsCard({ name, title, image }: SpecialistsCardProps) {
  return (
    <NavLink to={`/szakember/${toSlug(name)}`} className="teamMember">
      <img src={specialistImages[image.replace(/\.[^.]+$/, "")]} alt={name} />
      <h3>{name}</h3>
      <p>{title}</p>
    </NavLink>
  );
}
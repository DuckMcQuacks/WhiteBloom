import SpecialistsCard from "../components/SpecialistsCard";
import professionals from "../dataFiles/professionals.json";

export default function Professionals() {
  return (
    <main className="team" style={{ paddingTop: "60px" }}>
      <h2 className="sectionTitle">SZAKEMBEREINK</h2>

      <div className="teamGrid">
        {professionals.map((person: any) => (
          <SpecialistsCard
            key={person.id}
            id={person.id}
            name={person.name}
            title={person.Title ?? person.title ?? "Professional"}
          />
        ))}
      </div>
    </main>
  );
}
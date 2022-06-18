import "./OfficerDetails.css";
import PlaceholderImage from "./portrait-placeholder.png";

const OfficerDetails = ({ officer }) => {
  let image;
  let name;
  let divisionBadge;
  let status;
  let origin;
  let dateRecruited;
  if (officer) {
    image = <img src={officer.images.portrait} alt={"Image of " + name} />;
    name = (
      <div className="officer-info-title">
        <h2>{officer.name}</h2>
        <h4 className="crew-number">{officer.crewNumber}</h4>
      </div>
    );
    divisionBadge = (
      <p className={`division-badge ${officer.division.toLowerCase()}`}>
        {officer.division}
      </p>
    );
    status = <p>{officer.status}</p>;
    origin = <p>{officer.origin}</p>;
    dateRecruited = (
      <p>
        {new Date(officer.dateRecruited).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    );
  } else {
    image = <img src={PlaceholderImage} alt="placeholder cat reaching up" />;
    name = <div className="officer-info-title-placeholder"></div>;
    divisionBadge = <div className="division-badge-placeholder"></div>;
    status = <p className="text-placeholder"></p>;
    origin = <p className="text-placeholder text-placeholder--long"></p>;
    dateRecruited = <p className="text-placeholder"></p>;
  }

  return (
    <div className={"officer-card" + (!officer ? "-placeholder" : "")}>
      <div className="officer-img-container">{image}</div>
      <div className="officer-details">
        {name}
        {divisionBadge}
        <p className="officer-info-label">Status</p>
        {status}
        <p className="officer-info-label">Origin</p>
        {origin}
        <p className="officer-info-label">Recruited</p>
        {dateRecruited}
      </div>
    </div>
  );
};

export default OfficerDetails;

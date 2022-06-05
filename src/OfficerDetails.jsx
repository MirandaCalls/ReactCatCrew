import "./OfficerDetails.css";

const OfficerDetails = ({
  name,
  crewNumber,
  division,
  origin,
  dateRecruited,
  status,
  image,
}) => {
  return (
    <div className="officer-card">
      <div className="officer-img-container">
        <img src={image} alt={"Image of " + name} />
      </div>
      <div className="officer-details">
        <div className="officer-info-title">
          <h2>{name}</h2>
          <h4 className="crew-number">{crewNumber}</h4>
        </div>
        <p className={`division-badge ${division.toLowerCase()}`}>{division}</p>
        <p className="officer-info-label">Status</p>
        <p>{status}</p>
        <p className="officer-info-label">Origin</p>
        <p>{origin}</p>
        <p className="officer-info-label">Recruited</p>
        <p>
          {new Date(dateRecruited).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default OfficerDetails;

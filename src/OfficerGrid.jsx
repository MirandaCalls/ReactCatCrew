import { useState, useEffect } from "react";
import OfficerDetails from "./OfficerDetails.jsx";
import "./OfficerGrid.css";

const OfficerGrid = ({ onlyShowOnDuty }) => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    (async () => {
      let params = {
        onlyShowOnDuty: onlyShowOnDuty,
      };

      const res = await fetch(
        `https://cat-crew.netlify.app/.netlify/functions/get-crew?` +
          new URLSearchParams(params).toString()
      );
      const crew = await res.json();

      setCrew(crew);
    })();
  }, [onlyShowOnDuty]);

  return (
    <div className="officer-grid">
      {crew.length > 0 ? (
        crew.map((officer) => (
          <OfficerDetails
            key={officer.id}
            name={officer.name}
            crewNumber={officer.crewNumber}
            division={officer.division}
            status={officer.status}
            dateRecruited={officer.dateRecruited}
            origin={officer.origin}
            image={officer.images.portrait}
          />
        ))
      ) : (
        <p>No crew. Better start recruiting!</p>
      )}
    </div>
  );
};

export default OfficerGrid;

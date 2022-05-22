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
        `/.netlify/functions/get-crew?` +
          new URLSearchParams(params).toString(),
        { headers: { Authorization: "Bearer " } }
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

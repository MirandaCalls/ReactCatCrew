import { useState, useEffect } from "react";
import OfficerDetails from "./OfficerDetails.jsx";

import Placeholder from "./OfficerDetailsPlaceholder.png";
import "./OfficerGrid.css";

const OfficerGrid = ({ onlyShowOnDuty, searchText }) => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    (async () => {
      let params = {
        onlyShowOnDuty: onlyShowOnDuty,
      };

      if (searchText.length > 0) {
        params.search = searchText;
      }

      const res = await fetch(
        `${process.env.FUNCTIONS_SERVER}/.netlify/functions/get-crew?` +
          new URLSearchParams(params).toString()
      );
      const crew = await res.json();

      setCrew(crew);
    })();
  }, [onlyShowOnDuty, searchText]);

  return (
    <div className="officer-grid">
      {crew.length > 0
        ? crew.map((officer) => (
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
        : Array(6).fill(
            <img
              className="officer-card-placeholder"
              src={Placeholder}
              alt="placeholder crew card"
            />
          )}
    </div>
  );
};

export default OfficerGrid;

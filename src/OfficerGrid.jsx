import { useState, useEffect } from "react";
import OfficerDetails from "./OfficerDetails.jsx";
import "./OfficerGrid.css";

const divisionConversion = {
  COMMAND: "CMD",
  SCIENCE: "SCI",
  OPERATIONS: "OPS",
};

const OfficerGrid = ({ onlyShowOnDuty, searchText }) => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    (async () => {
      let params = {
        onlyShowOnDuty: onlyShowOnDuty,
      };

      if (searchText.length > 0) {
        let searchTextConv = searchText.toUpperCase();
        for (let key in divisionConversion) {
          if (key.includes(searchTextConv)) {
            searchTextConv = divisionConversion[key];
          }
        }

        params.search = searchTextConv;
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
            <OfficerDetails officer={officer} key={officer.id} />
          ))
        : Array(6).fill(<OfficerDetails />)}
    </div>
  );
};

export default OfficerGrid;

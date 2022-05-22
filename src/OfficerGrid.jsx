import { useState, useEffect } from "react";
import OfficerDetails from "./OfficerDetails.jsx";
import "./OfficerGrid.css";

const OfficerGrid = ({ onlyShowOnDuty }) => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    (async () => {
      let params = {
        view: "Grid view",
      };

      if (onlyShowOnDuty) {
        params.filterByFormula = 'Status = "On Duty"';
      }

      const res = await fetch(
        `https://api.airtable.com/v0/appdP6n26nxymOzG1/Crew%20List?` +
          new URLSearchParams(params).toString(),
        { headers: { Authorization: "Bearer " } }
      );
      const json = await res.json();

      var crew = [];
      for (var officer of json.records) {
        crew.push({
          id: officer.id,
          name: officer.fields.Name,
          division: officer.fields.Division,
          status: officer.fields.Status,
          dateRecruited: officer.fields["Date Recruited"],
          origin: officer.fields.Origin,
          images: {
            portrait: officer.fields.Image[0].url,
            thumbnail: officer.fields.Image[0].thumbnails.small.url,
          },
        });
      }

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

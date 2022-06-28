import ToggleInput from "./ToggleInput.jsx";
import SearchInput from "./SearchInput.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useWindowWidth from "./useWindowWidth.js";

import "./GridControls.css";

const GridControls = ({ onlyOnDuty, searchText, onChange }) => {
  const [width] = useWindowWidth();

  const displayMobile = width < 552;

  return (
    <div className="grid-controls-bar">
      <div className="grid-controls-bar__container">
        <ToggleInput
          value={onlyOnDuty}
          label="On Duty"
          onChange={(isOn) => {
            onChange(isOn, searchText);
          }}
        />
        {displayMobile ? (
          <div
            style={{
              margin: "0px 10px",
              border: "1px solid black",
              padding: "8px 8px",
              display: "flex",
              "flex-direction": "column",
              "align-items": "center",
              "border-radius": "5px",
              "background-color": "#ddf2ff",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon
              icon={solid("magnifying-glass")}
              style={{
                width: "16px",
              }}
            />
          </div>
        ) : (
          <SearchInput
            color="#ddf2ff"
            onChange={(text) => {
              onChange(onlyOnDuty, text);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default GridControls;

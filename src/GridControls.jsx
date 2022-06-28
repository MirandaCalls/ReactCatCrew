import ToggleInput from "./ToggleInput.jsx";
import SearchInput from "./SearchInput.jsx";
import SearchToggle from "./SearchToggle.jsx";
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
          <SearchToggle />
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

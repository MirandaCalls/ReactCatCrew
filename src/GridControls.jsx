import ToggleInput from "./ToggleInput.jsx";
import SearchInput from "./SearchInput.jsx";

import "./GridControls.css";

const GridControls = ({ onlyOnDuty, searchText, onChange }) => {
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
        <SearchInput
          color="#ddf2ff"
          onChange={(text) => {
            onChange(onlyOnDuty, text);
          }}
        />
      </div>
    </div>
  );
};

export default GridControls;

import ToggleInput from "./ToggleInput.jsx";

import "./GridControls.css";

const GridControls = ({ onlyOnDuty, onChangeOnlyOnDuty }) => {
  return (
    <div className="grid-controls-bar">
      <div className="grid-controls-bar__container">
        <ToggleInput
          value={onlyOnDuty}
          label="On Duty"
          onChange={onChangeOnlyOnDuty}
        />
      </div>
    </div>
  );
};

export default GridControls;

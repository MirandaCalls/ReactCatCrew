import { useState } from "react";

import "./ToggleInput.css";

const ToggleInput = ({ value, label, onChange }) => {
  const [isOn, setIsOn] = useState(value);

  const onToggleClick = () => {
    let new_value = !isOn;
    setIsOn(new_value);
    onChange(new_value);
  };

  return (
    <div className="toggle-input-container" onClick={onToggleClick}>
      <div className={"toggle-input" + (isOn ? " toggle-input--enabled" : "")}>
        <div className="toggle-input__knob"></div>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ToggleInput;

import { useState } from "react";
import { render } from "react-dom";
import OfficerGrid from "./OfficerGrid.jsx";
import GridControls from "./GridControls.jsx";
import "./App.css";

const App = () => {
  const [onlyOnDuty, setOnlyOnDuty] = useState(false);

  return (
    <div>
      <GridControls
        onlyOnDuty={onlyOnDuty}
        onChangeOnlyOnDuty={(isOn) => {
          setOnlyOnDuty(isOn);
        }}
      />
      <OfficerGrid onlyShowOnDuty={onlyOnDuty} />
    </div>
  );
};

render(<App />, document.getElementById("root"));

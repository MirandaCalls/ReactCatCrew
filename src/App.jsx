import { useState } from "react";
import { render } from "react-dom";
import OfficerGrid from "./OfficerGrid.jsx";
import GridControls from "./GridControls.jsx";
import "./App.css";

const App = () => {
  const [onlyOnDuty, setOnlyOnDuty] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <GridControls
        onlyOnDuty={onlyOnDuty}
        searchText={searchText}
        onChange={(onlyOnDuty, searchText) => {
          setOnlyOnDuty(onlyOnDuty);
          setSearchText(searchText);
        }}
      />
      <div className="main-content">
        <OfficerGrid onlyShowOnDuty={onlyOnDuty} searchText={searchText} />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));

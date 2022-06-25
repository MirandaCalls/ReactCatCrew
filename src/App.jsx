import { useState } from "react";
import { render } from "react-dom";
import OfficerGrid from "./OfficerGrid.jsx";
import GridControls from "./GridControls.jsx";
import useWindowWidth from "./useWindowWidth.js";

import "./App.css";

const App = () => {
  const [width] = useWindowWidth();
  const [onlyOnDuty, setOnlyOnDuty] = useState(false);
  const [searchText, setSearchText] = useState("");

  const displayMobile = width < 768;

  return (
    <div>
      <GridControls
        displayMobile={displayMobile}
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

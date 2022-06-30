import { useState } from "react";
import ToggleInput from "./ToggleInput.jsx";
import SearchInput from "./SearchInput.jsx";
import SearchToggle from "./SearchToggle.jsx";
import useWindowWidth from "./useWindowWidth.js";

import "./GridControls.css";

const GridControls = ({ onlyOnDuty, searchText, onChange }) => {
  const [width] = useWindowWidth();
  const [hideSearch, setHideSearch] = useState(true);

  const displayMobile = width < 552;

  return (
    <div className="grid-controls-bar">
      <div className="grid-controls-bar__container">
        {displayMobile && !hideSearch ? (
          ""
        ) : (
          <ToggleInput
            value={onlyOnDuty}
            label="On Duty"
            onChange={(isOn) => {
              onChange(isOn, searchText);
            }}
          />
        )}

        {displayMobile && hideSearch ? (
          ""
        ) : (
          <SearchInput
            initialValue={searchText}
            color="#ddf2ff"
            onChange={(text) => {
              onChange(onlyOnDuty, text);
            }}
            mobile={displayMobile}
          />
        )}

        {displayMobile ? (
          <SearchToggle
            isOpen={!hideSearch}
            onClick={() => {
              setHideSearch(!hideSearch);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default GridControls;

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./SearchInput.css";

const SearchInput = ({ initialValue, color, onChange, mobile }) => {
  const [content, setContent] = useState(initialValue);
  const callbackId = useRef(null);

  const runOnChange = (e) => {
    if (callbackId.current) {
      clearTimeout(callbackId.current);
      callbackId.current = null;
    }

    const value = e.target.value;
    setContent(value);

    callbackId.current = setTimeout(() => {
      onChange(value);
    }, 500);
  };

  return (
    <div
      className={
        "search-input-container " +
        (mobile ? "search-input-container--mobile" : "")
      }
    >
      <input
        type="text"
        className="search-input"
        value={content}
        style={{
          "background-color": color,
        }}
        placeholder="Search Crew IDs"
        onChange={runOnChange}
      />
      <FontAwesomeIcon
        icon={solid("magnifying-glass")}
        className="search-input__magnifying-glass"
      />
    </div>
  );
};

export default SearchInput;

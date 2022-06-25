import { useState, useRef } from "react";
import MagnifyingGlass from "./MagnifyingGlass.jsx";

import "./SearchInput.css";

const SearchInput = ({ color, onChange }) => {
  const [content, setContent] = useState("");
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
    <div className="search-input-container">
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
      <MagnifyingGlass />
    </div>
  );
};

export default SearchInput;

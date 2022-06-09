import { useState } from "react";

import "./SearchInput.css";

const SearchInput = ({ color, onChange }) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const runOnChange = (e) => {
    const value = e.target.value;
    setContent(value);
    onChange(value);
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
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="magnifying-glass"></div>
      )}
    </div>
  );
};

export default SearchInput;

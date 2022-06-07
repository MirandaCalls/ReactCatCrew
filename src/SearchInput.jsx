import { useState } from "react";

import "./SearchInput.css";

const SearchInput = ({ color }) => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        onChange={(e) => setContent(e.text)}
      />
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="magnifying-glass"></div>
      )}
      {/**/}
    </div>
  );
};

export default SearchInput;

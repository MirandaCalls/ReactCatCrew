import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./SearchToggle.css";

const SearchToggle = ({ isOpen, onClick }) => {
  return (
    <div className="search-toggle" onClick={onClick}>
      {isOpen ? (
        <FontAwesomeIcon
          icon={solid("xmark")}
          style={{
            width: "16px",
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={solid("magnifying-glass")}
          style={{
            width: "16px",
          }}
        />
      )}
    </div>
  );
};

export default SearchToggle;

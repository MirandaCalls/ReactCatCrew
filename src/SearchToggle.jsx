import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const SearchToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search-toggle" onClick={() => setIsOpen(!isOpen)}>
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

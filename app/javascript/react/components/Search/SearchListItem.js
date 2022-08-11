import React from "react";

const SearchListItem = ({
  name,
  capital,
  region,
  flag,
  onSelectItem,
  isHighlighted,
}) => {
  return (
    <li
      className={`list-group-item ${isHighlighted ? "active highlighted" : ""}`}
      onClick={onSelectItem}
    >
      <div className="row">
        <div className="col text-left">
          <p>
            {name.common} <img src={flag} alt="" style={{ width: "30px" }} />
          </p>
          <p className="label primary">{region}</p>
          <p className="label secondary">{capital}</p>
        </div>
      </div>
    </li>
  );
};

export default SearchListItem;

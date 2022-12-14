import React, { useState } from "react";
import WorldMap from "./WorldMap";
import ReactTooltip from "react-tooltip";

const MapContainer = () => {
  const [content, setContent] = useState("");
  return (
    <div className="cell small-12 medium-6 large-5">
      <div className="world-map">
        <WorldMap setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
};

export default MapContainer;

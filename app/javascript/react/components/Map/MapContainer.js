import React, { useState } from "react";
import WorldMap from "./WorldMap";
import ReactTooltip from "react-tooltip";

const MapContainer = () => {
  const [content, setContent] = useState("");
  return (
    <div className="world-map">
      <WorldMap setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default MapContainer;

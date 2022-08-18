import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { useNavigate } from "react-router-dom";
import slugify from "react-slugify";

const WorldMap = ({ setTooltipContent }) => {
  let navigate = useNavigate();
  const routeChange = (geo) => {
    let path = `/countries/${geo}`;
    navigate(path);
  };
  return (
    <div data-tip="" className="map-container">
      <ComposableMap projection="geoMercator">
        <ZoomableGroup zoom={0.8} minZoom={0.7} center={[0, 40]}>
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke={"#7a85ff"}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    routeChange(slugify(geo.properties.name));
                  }}
                  style={{
                    default: {
                      fill: "#7a85ff26",
                      outline: "none",
                    },
                    hover: {
                      fill: "#5765ff",
                      outline: "none",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(WorldMap);

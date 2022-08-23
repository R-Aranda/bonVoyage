import moment from "moment";
import React, { useEffect } from "react";

const SkyScannerFlight = ({ city }) => {
  const useScript = (url) => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  };

  const departDate = moment(new Date())
    .add(7, "d")
    .format("YYYY-MM-DD");

  const returnDate = moment(new Date())
    .add(14, "d")
    .format("YYYY-MM-DD");

  useScript("https://widgets.skyscanner.net/widget-server/js/loader.js");
  return (
    <div className="skyscanner-container">
      <h4 className="skyscanner-header">Find a Flight</h4>
      <div
        data-skyscanner-widget="FlightSearchWidget"
        data-locale="en-US"
        data-market="US"
        data-currency="USD"
        data-destination-name={city}
        data-flight-outbound-date={departDate}
        data-flight-inbound-date={returnDate}
        data-iframe="true"
        data-origin-geo-lookup="true"
        data-flight-type="return"
        data-button-colour="#5765ff"
        data-widget-scale="0.8"
        data-widget-padding="10px 12px"
      ></div>
    </div>
  );
};

export default SkyScannerFlight;

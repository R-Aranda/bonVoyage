import React, { useEffect } from "react";
import moment from "moment";

const SkyScannerHotel = ({ city }) => {
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
  const checkInDate = moment(new Date())
    .add(7, "d")
    .format("YYYY-MM-DD");

  const checkOutDate = moment(new Date())
    .add(14, "d")
    .format("YYYY-MM-DD");

  useScript("https://widgets.skyscanner.net/widget-server/js/loader.js");
  return (
    <div className="skyscanner-container">
      <h4 className="skyscanner-header">Find a Hotel</h4>
      <div
        data-skyscanner-widget="HotelSearchWidget"
        data-locale="en-US"
        data-market="US"
        data-currency="USD"
        data-destination-name={city}
        data-hotel-check-in-date={checkInDate}
        data-hotel-check-out-date={checkOutDate}
        data-iframe="true"
        data-button-colour="#5765ff"
        data-widget-scale="0.8"
        data-widget-padding="10px 12px"
      ></div>
    </div>
  );
};

export default SkyScannerHotel;

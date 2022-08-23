import React, { useEffect } from "react";

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

  useScript("https://widgets.skyscanner.net/widget-server/js/loader.js");
  return (
    <div className="skyscanner-container">
      <div
        data-skyscanner-widget="HotelSearchWidget"
        data-locale="en-US"
        data-market="US"
        data-currency="USD"
        data-destination-name={city}
        data-iframe="true"
        data-origin-geo-lookup="true"
        data-button-colour="#5765ff"
        data-widget-scale="0.8"
        data-widget-padding="10px 12px"
      ></div>
    </div>
  );
};

export default SkyScannerHotel;

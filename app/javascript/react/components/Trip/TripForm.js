import React, { Fragment, useEffect, useRef } from "react";

const TripForm = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      { types: ["locality"], componentRestrictions: { country: "CA" } }
    );
    autoCompleteRef.current.addListener("place_changed", async function() {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
    });
  }, []);

  const options = [{ value: 165, label: "United States" }];
  return (
    <Fragment>
      <input ref={inputRef} placeholder="Enter a City" />
    </Fragment>
  );
};

export default TripForm;

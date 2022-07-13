import { useState } from "react";

export const useLocation = () => {
  const [visibleLocation, setVisibleLocation] = useState(false);

  const [location, setLocation] = useState("Location");

  function handleVisibleLocation() {
    setVisibleLocation(!visibleLocation);
  }

  function handleClickLocation(e) {
    setLocation(e.target.innerText);
    return e.target.innerText;
  }

  return {
    visibleLocation,
    location,
    handleVisibleLocation,
    handleClickLocation
  };
};

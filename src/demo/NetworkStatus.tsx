import React, { useState, useEffect } from "react";

const initialLocationState = {
  latitude: null,
  longitude: null
};

const NetworkStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);
  const [location, setLocation] = useState(initialLocationState);

  let mounted = true;
  let watchId: any = null;

  const handleOnline = (event: any) => {
    setStatus(true);
  };

  const handleOffline = (event: any) => {
    setStatus(false);
  };

  const handleGeolocation = (event: any) => {
    if (mounted) {
      const { latitude, longitude } = event.coords;
      setLocation({
        latitude,
        longitude
      });
    }
  };

  const cleanUp = () => {
    window.removeEventListener("online", handleOnline);
    window.removeEventListener("offline", handleOffline);
    mounted = false;
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
    }
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    navigator.geolocation.getCurrentPosition(handleGeolocation);
    watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return cleanUp;
  }, []);

  return (
    <div>
      <p>
        You are: <strong>{status ? "online" : "offline"}</strong>
      </p>
      <p>Geolocation: {JSON.stringify(location)}</p>
    </div>
  );
};

export default NetworkStatus;

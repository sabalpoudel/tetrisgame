import React, { useEffect, useState } from "react";
import Tetris from "./components/Tetris";

const UseDesktop = () => (
  <div className="useDesktop">
    <div className="useDesktop-message">
      Oops!! Tetris game is currently only available at web browser :(
    </div>
  </div>
);

const App = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setDeviceType("tablet");
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      setDeviceType("mobile");
    }
  }, []);

  return (
    <div className="App">
      {deviceType === "desktop" ? <Tetris /> : <UseDesktop />}
    </div>
  );
};
export default App;

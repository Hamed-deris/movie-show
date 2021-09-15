import { useEffect, useState } from "react";

export default function ScreenSize() {
  const [screenWidth, setScreenWidth] = useState("");
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.onresize = () => setScreenWidth(window.innerWidth);
  }, []);
  return (
    <div
      style={{
        display: "inline-flex",
        position: "fixed",
        left: "10px",
        bottom: "0px",
        backgroundColor: "black",
        color: "#ddd",
        padding: "2px 6px",
        fontSize: "12px",
      }}
    >
      {screenWidth < 640 && `mob : ${screenWidth}`}
      {640 <= screenWidth && screenWidth < 768 && `sm : ${screenWidth}`}
      {768 <= screenWidth && screenWidth < 1024 && `md : ${screenWidth}`}
      {1024 <= screenWidth && screenWidth < 1280 && `lg : ${screenWidth}`}
      {1280 <= screenWidth && screenWidth < 1536 && `xl : ${screenWidth}`}
      {1536 <= screenWidth && `xl : ${screenWidth}`}
    </div>
  );
}

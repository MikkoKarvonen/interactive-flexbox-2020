import React, { useState } from "react";
import "./App.css";

function App() {
  const [fdStyle, setFdStyle] = useState("row");
  const [fwStyle, setFwStyle] = useState("nowrap");
  const [jcStyle, setJcStyle] = useState("flex-start");
  const [aiStyle, setAiStyle] = useState("flex-start");

  let shapesStyle = {
    width: "400px",
    height: "400px",
    background: "#333333",
    display: "flex",
    flexDirection: fdStyle,
    flexWrap: fwStyle,
    justifyContent: jcStyle,
    alignItems: aiStyle,
  };

  return (
    <div>
      <div style={shapesStyle}>
        <div className="shape shape1">｡◕‿‿◕｡</div>
        <div className="shape shape2">ಥ﹏ಥ</div>
        <div className="shape shape3">ᵔᴥᵔ</div>
        <div className="shape shape4">ಠ╭╮ಠ</div>
        <div className="shape shape5">˘▾˘</div>
      </div>
    </div>
  );
}

export default App;

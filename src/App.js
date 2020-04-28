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

  const fdChange = (a) => {
    setFdStyle(a);
  };

  const fwChange = (a) => {
    setFwStyle(a);
  };

  const jcChange = (a) => {
    setJcStyle(a);
  };

  const aiChange = (a) => {
    setAiStyle(a);
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

      <div id="controls">
        <p class="label primary">Flex-direction</p>
        <button onClick={() => fdChange("row")}>row</button>
        <button onClick={() => fdChange("row-reverse")}>row-reverse</button>
        <button onClick={() => fdChange("column")}>column</button>
        <button onClick={() => fdChange("column-reverse")}>
          column-reverse
        </button>
        <p class="label secondary">Flex-wrap</p>
        <button onClick={() => fwChange("nowrap")}>nowrap</button>
        <button onClick={() => fwChange("wrap")}>wrap</button>
        <button onClick={() => fwChange("wrap-reverse")}>wrap-reverse</button>
        <p class="label success">Justify-content</p>
        <button onClick={() => jcChange("flex-start")}>flex-start</button>
        <button onClick={() => jcChange("flex-end")}>flex-end</button>
        <button onClick={() => jcChange("center")}>center</button>
        <button onClick={() => jcChange("space-between")}>space-between</button>
        <button onClick={() => jcChange("space-around")}>space-around</button>
        <button onClick={() => jcChange("space-evenly")}>space-evenly</button>
        <p class="label warning">Align-items</p>
        <button onClick={() => aiChange("flex-start")}>flex-start</button>
        <button onClick={() => aiChange("flex-end")}>flex-end</button>
        <button onClick={() => aiChange("center")}>center</button>
        <button onClick={() => aiChange("baseline")}>baseline</button>
        <button onClick={() => aiChange("stretch")}>stretch</button>
      </div>
    </div>
  );
}

export default App;

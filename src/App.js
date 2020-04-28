import React, { useState } from "react";
import "./App.css";

function App() {
  const [fdStyle, setFdStyle] = useState("row");
  const [fwStyle, setFwStyle] = useState("nowrap");
  const [jcStyle, setJcStyle] = useState("flex-start");
  const [aiStyle, setAiStyle] = useState("flex-start");
  const [shapeCount, setShapeCount] = useState(3);

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

  let shapes = [
    { name: "shape1", face: "｡◕‿‿◕｡" },
    { name: "shape2", face: "ಥ﹏ಥ" },
    { name: "shape3", face: "ᵔᴥᵔ" },
    { name: "shape4", face: "ಠ╭╮ಠ" },
    { name: "shape5", face: "˘▾˘" },
  ];

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

  const countChange = (a) => {
    let change = shapeCount + a;
    if (change > 0 && change <= 5) {
      setShapeCount(shapeCount + a);
    }
  };

  return (
    <div>
      <div style={shapesStyle}>
        {shapes.slice(0, shapeCount).map((e) => {
          return <div className={"shape " + e.name}>{e.face}</div>;
        })}
      </div>

      <div id="controls">
        <p>Flex-direction</p>
        <button onClick={() => fdChange("row")}>row</button>
        <button onClick={() => fdChange("row-reverse")}>row-reverse</button>
        <button onClick={() => fdChange("column")}>column</button>
        <button onClick={() => fdChange("column-reverse")}>
          column-reverse
        </button>
        <p>Flex-wrap</p>
        <button onClick={() => fwChange("nowrap")}>nowrap</button>
        <button onClick={() => fwChange("wrap")}>wrap</button>
        <button onClick={() => fwChange("wrap-reverse")}>wrap-reverse</button>
        <p>Justify-content</p>
        <button onClick={() => jcChange("flex-start")}>flex-start</button>
        <button onClick={() => jcChange("flex-end")}>flex-end</button>
        <button onClick={() => jcChange("center")}>center</button>
        <button onClick={() => jcChange("space-between")}>space-between</button>
        <button onClick={() => jcChange("space-around")}>space-around</button>
        <button onClick={() => jcChange("space-evenly")}>space-evenly</button>
        <p>Align-items</p>
        <button onClick={() => aiChange("flex-start")}>flex-start</button>
        <button onClick={() => aiChange("flex-end")}>flex-end</button>
        <button onClick={() => aiChange("center")}>center</button>
        <button onClick={() => aiChange("baseline")}>baseline</button>
        <button onClick={() => aiChange("stretch")}>stretch</button>
        <p>+/-</p>
        <button onClick={() => countChange(1)}>+</button>
        <button onClick={() => countChange(-1)}>-</button>
      </div>

      <code>
        <div>
          display: <span>flex</span>;
        </div>
        <div>
          flex-direction:
          <span id="flex_direction_style">{fdStyle}</span>;
        </div>
        <div>
          flex-wrap:
          <span id="flex_wrap_style">{fwStyle}</span>;
        </div>
        <div>
          justify-content:
          <span id="justify_content_style">{jcStyle}</span>;
        </div>
        <div>
          align-items:
          <span id="align_items_style">{aiStyle}</span>;
        </div>
      </code>
    </div>
  );
}

export default App;

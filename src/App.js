import React, { useState } from "react";
import "./App.css";
import { Button, ButtonGroup } from "@material-ui/core";

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

  let controls = [
    {
      name: "Flex-direction",
      param: "fdChange",
      values: ["row", "row-reverse", "column", "column-reverse"],
    },
    {
      name: "Flex-wrap",
      param: "fwChange",
      values: ["nowrap", "wrap", "wrap-reverse"],
    },
    {
      name: "Justify-content",
      param: "jcChange",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    {
      name: "Align-items",
      param: "aiChange",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
  ];

  const handleChange = (value, param) => {
    let p = param.el.param;
    if (p === "fdChange") {
      setFdStyle(value.f);
    } else if (p === "fwChange") {
      setFwStyle(value.f);
    } else if (p === "jcChange") {
      setJcStyle(value.f);
    } else if (p === "aiChange") {
      setAiStyle(value.f);
    }
  };

  const countChange = (a) => {
    let change = shapeCount + a;
    if (change > 0 && change <= 5) {
      setShapeCount(shapeCount + a);
    }
  };

  return (
    <div class="base">
      <div style={shapesStyle}>
        {shapes.slice(0, shapeCount).map((e) => {
          return <div className={"shape " + e.name}>{e.face}</div>;
        })}
      </div>

      <div id="controls">
        {controls.map((el) => {
          return (
            <div>
              <p>{el.name}</p>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                {el.values.map((f) => {
                  return (
                    <Button onClick={() => handleChange({ f }, { el })}>
                      {f}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </div>
          );
        })}
        <div>
          <p>+/-</p>
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical outlined primary button group"
          >
            <Button onClick={() => countChange(1)}>+</Button>
            <Button onClick={() => countChange(-1)}>-</Button>
          </ButtonGroup>
        </div>
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

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
      hook: fdStyle,
      param: "fdChange",
      values: ["row", "row-reverse", "column", "column-reverse"],
    },
    {
      name: "Flex-wrap",
      hook: fwStyle,
      param: "fwChange",
      values: ["nowrap", "wrap", "wrap-reverse"],
    },
    {
      name: "Justify-content",
      hook: jcStyle,
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
      hook: aiStyle,
      param: "aiChange",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
    {
      name: "+/-",
      param: "shapeChange",
      values: ["+", "-"],
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
    } else if (p === "shapeChange") {
      countChange(value.f === "+" ? 1 : -1);
    }
  };

  const countChange = (a) => {
    let change = shapeCount + a;
    if (change > 0 && change <= 5) {
      setShapeCount(shapeCount + a);
    }
  };

  return (
    <div className="base">
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
      </div>

      <code className="codeBlock">
        <div>
          display: <span>flex</span>;
        </div>
        {controls.map((e) => {
          if (e.hook) {
            return (
              <div>
                {e.name.toLowerCase()}:
                <span id="align_items_style">{e.hook}</span>;
              </div>
            );
          }
        })}
      </code>
    </div>
  );
}

export default App;

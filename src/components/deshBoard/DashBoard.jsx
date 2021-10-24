import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import styles from "./DashBoard.module.css";

const DashBoard = () => {
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [fontWeight, setfontWeight] = useState("normal");
  const [fontSize, setFontSize] = useState(10);
  const [fontColor, setFontColor] = useState();
  const [lineHeight, setLineHeight] = useState(10);
  const [align, setAlign] = useState("left");

  const changeFontFamily = (e) => {
    setFontFamily(e.target.value);
  };
  const changeFontWeight = (e) => {
    setfontWeight(e.target.value);
  };
  const changeFontSize = (e) => {
    setFontSize(e.target.value);
  };
  const changeFontColor = (e) => {
    setFontColor(e.target.value);
  };
  const changeLineHeight = (e) => {
    setLineHeight(e.target.value);
  };
  const changeAlign = (e) => {
    setAlign(e.target.alt);
  };
  const saveChange = () => {
    alert("Changes has been saved");
  };

  return (
    <>
      <div className={styles.dashBoard}>
        <div className={styles.textarea}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            style={{
              fontFamily: `${fontFamily}`,
              fontWeight: `${fontWeight}`,
              fontSize: `${fontSize}px`,
              color: `${fontColor}`,
              lineHeight: `${lineHeight}px`,
              textAlign: `${align}`,
            }}
          ></textarea>
        </div>
        <div className={styles.control}>
          <span>Text</span>

          <div className={styles.dropDown}>
            <div className={styles.fontFamily}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Font Family
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   label="Age"
                  value={fontFamily}
                  label="Font Family"
                  onChange={changeFontFamily}
                >
                  <MenuItem value={"Roboto"}>Roboto</MenuItem>
                  <MenuItem value={"Lato"}>Lato</MenuItem>
                  <MenuItem value={"Open Sans"}>Open Sans</MenuItem>
                  <MenuItem value={"Festive"}>Festive</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.lineTwo}>
              <div className={styles.fontWeight}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Font Weight
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={fontWeight}
                    label="Font Weight"
                    onChange={changeFontWeight}
                    color="secondary"
                  >
                    <MenuItem value={"normal"}>normal</MenuItem>
                    <MenuItem value={"bold"}>bold</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.fontSize}>
                <FormControl fullWidth>
                  <TextField
                    label="Size"
                    color="secondary"
                    focused
                    value={fontSize}
                    onChange={changeFontSize}
                  />
                </FormControl>
              </div>
            </div>

            <div className={styles.color}>
              <input
                type="color"
                name=""
                id=""
               

                value={fontColor}
                onChange={changeFontColor}
              />
            </div>

            <div className={styles.lineThree}>
              <div className={styles.per}>
                <FormControl fullWidth>
    
                  <TextField
                    label="Line Height"
                    color="secondary"
                    focused
                    value={lineHeight}
                    onChange={changeLineHeight}
                    
                  />
                  
                </FormControl>
              </div>
            </div>

            <div className={styles.textAlign}>
              <img src="./img/left.png" alt="left" onClick={changeAlign} />
              <img src="./img/center.png" alt="center" onClick={changeAlign} />
              <img src="./img/right.png" alt="right" onClick={changeAlign} />
            </div>
            <button onClick={saveChange}>SAVE CHANGES</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

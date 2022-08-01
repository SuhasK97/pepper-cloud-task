import React from "react";
import "../styles/Stepper.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Stepper = ({
  type = "success",
  label = "step 1",
  iconName = "done",
  handleClick = () => {},
}) => {
  const getIcon = () => {
    if (iconName === "done") {
      return <CheckCircleOutlineIcon />;
    }
    if (iconName === "none") {
      return <RadioButtonUncheckedIcon />;
    }
  };
  return (
    <div id={type} onClick={handleClick}>
      {label} {getIcon()}
    </div>
  );
};

export default Stepper;

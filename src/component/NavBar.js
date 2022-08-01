import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SubNavbar from "./SubNavbar";
import Stepper from "./Stepper";
import { Paper } from "@mui/material";

const stepperData = [
  { type: "success", label: "step 1", iconName: "done" },
  { type: "warning", label: "New", iconName: "none" },
  { type: "white", label: "Working", iconName: "none" },
  { type: "white", label: "Nurturing", iconName: "none" },
  { type: "white", label: "Converted", iconName: "none" },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} style={{ backgroundColor: "#f3f6f9" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        style={{ backgroundColor: "#f3f6f9" }}
      >
        <Paper className="p-2 mx-2 d-flex" elevation={6}>
          {stepperData.map((item) => (
            <Box className="me-4">
              <Stepper
                type={item.type}
                label={item.label}
                iconName={item.iconName}
              />
            </Box>
          ))}
        </Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="orange"
          indicatorColor="secondary"
        >
          <Tab label="Activity" {...a11yProps(0)} />
          <Tab label="Information" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SubNavbar />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Information
      </TabPanel>
    </Box>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Task from "./Task";
import { Row } from "react-bootstrap";
import Rightbar from "./Rightbar";

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
    <div style={{ backgroundColor: "#f3f6f9" }} className="row overflow-hidden p-2 mx-2 d-flex flex-wrap">
      <div
        className="col-lg-8"
        style={{ border: "1px solid green", backgroundColor: "white" }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="orange"
              indicatorColor="secondary"
            >
              <Tab label="Log Calls" {...a11yProps(0)} />
              <Tab label="Task" {...a11yProps(1)} />
              <Tab label="Event" {...a11yProps(2)} />
              <Tab label="Make Note" {...a11yProps(3)} />
              <Tab label="Add Attachment" {...a11yProps(4)} />
              <Tab label="Activity Set" {...a11yProps(5)} />
              <Tab label="Custom Field" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Log Calls
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Task />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Task
          </TabPanel>
          <TabPanel value={value} index={3}>
            Event
          </TabPanel>
          <TabPanel value={value} index={4}>
            "Make Note
          </TabPanel>
          <TabPanel value={value} index={5}>
            Add Attachment
          </TabPanel>
          <TabPanel value={value} index={6}>
            Activity Set
          </TabPanel>
          <TabPanel value={value} index={7}>
            Custom Field
          </TabPanel>
        </Box>
      </div>
      <div className="col-lg-4">
        <Rightbar />
      </div>
    </div>
  );
}

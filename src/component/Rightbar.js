import React from "react";
import {
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
  Card,
} from "react-bootstrap";
import CallIcon from "@mui/icons-material/Call";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListAltIcon from "@mui/icons-material/ListAlt";

function Rightbar() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Text input with dropdown button"
          placeholder="Filter by date"
        />

        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-2"
          align="end"
          style={{ border: "none" }}
        >
          <Dropdown.Item href="#"></Dropdown.Item>
          <Dropdown.Item href="#"></Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      <hr></hr>
      <div>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "start",
              }}
            >
              <div>
                <CallIcon style={{ color: "blue", marginTop: "40px" }} />
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Card.Title>Card title</Card.Title>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
                <small>13 Nov 2018 5:49AM</small>
              </div>
            </Card.Text>
          </Card.Body>
          <small>˅</small>
        </Card>
        <br></br>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "start",
              }}
            >
              <div>
                <TaskAltIcon style={{ color: "green", marginTop: "40px" }} />
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Card.Title>Card title</Card.Title>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
                <small>13 Nov 2018 5:49AM</small>
              </div>
            </Card.Text>
          </Card.Body>
          <small>˅</small>
        </Card>
        <br></br>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "start",
              }}
            >
              <div>
                <ListAltIcon style={{ color: "orange", marginTop: "40px" }} />
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Card.Title>Card title</Card.Title>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
                <small>13 Nov 2018 5:49AM</small>
              </div>
            </Card.Text>
          </Card.Body>
          <small>˅</small>
        </Card>
        <br></br>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "start",
              }}
            >
              <div>
                <CallIcon style={{ color: "blue", marginTop: "40px" }} />
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Card.Title>Card title</Card.Title>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
                <small>13 Nov 2018 5:49AM</small>
              </div>
            </Card.Text>
          </Card.Body>
          <small>˅</small>
        </Card>
        <br></br>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "start",
              }}
            >
              <div>
                <TaskAltIcon style={{ color: "green", marginTop: "40px" }} />
              </div>
              <div style={{ marginLeft: "50px" }}>
                <Card.Title>Card title</Card.Title>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
                <small>13 Nov 2018 5:49AM</small>
              </div>
            </Card.Text>
          </Card.Body>
          <small>˅</small>
        </Card>
      </div>
    </div>
  );
}

export default Rightbar;

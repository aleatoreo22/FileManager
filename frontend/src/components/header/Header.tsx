import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faBars,
  faCaretDown,
  faEllipsisV,
  faHome,
  faListUl,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form, FormControl } from "react-bootstrap";
import "./Header.css";
import MinimalistButton from "../minimalistButton/minimalistButton";

function Header() {
  return (
    <Container
      style={{
        display: "grid",
        padding: "0px",
        gridTemplateColumns: "70px 1fr 150px",
      }}
    >
      <Col
        style={{
          textAlign: "left",
          alignItems: "center",
          display: "flex",
        }}
      >
        <MinimalistButton icon={faAngleLeft} onClick={() => {}} />
        <MinimalistButton icon={faAngleRight} onClick={() => {}} />
      </Col>
      <Col
        style={{
          background: "#4f4f4f",
          height: "37px",
          margin: "7px",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <FontAwesomeIcon
          icon={faHome}
          style={{
            marginLeft: "10px",
            color: "snow",
            height: "14px",
            marginRight: "5px",
          }}
        />
        <FormControl
          style={{
            background: "transparent",
            border: "0px",
            color: "snow",
            width: "100%",
            fontFamily: "Arial",
            padding: "0px",
            paddingTop: "5px",
          }}
          value={"Home"}
        />
        <MinimalistButton icon={faEllipsisV} onClick={() => {}} />
      </Col>
      <Col
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <MinimalistButton icon={faSearch} onClick={() => {}} />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{
              background: "transparent",
              borderColor: "transparent",
              paddingTop: "10px",
              display: "flex",
              alignItems: "center",
              marginBottom: "3px",
            }}
          >
            <FontAwesomeIcon
              icon={faListUl}
              style={{
                paddingRight: "5px",
              }}
            />
            <div
              style={{
                borderRight: "1px solid #a8a8a8",
                height: "30px",
                marginRight: "4px",
              }}
            ></div>
            <FontAwesomeIcon icon={faCaretDown} />
          </Button>
          <MinimalistButton icon={faBars} onClick={() => {}} />
        </div>
      </Col>
    </Container>
  );
}

export default Header;

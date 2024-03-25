import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Form } from "react-bootstrap";

interface SideBarButtonProps {
  icon: IconProp;
  content: string;
  onClick: () => void;
}

function SideBarButton(props: SideBarButtonProps) {
  return (
    <Button
      style={{
        width: "100%",
        textAlign: "start",
        background: "transparent",
        borderColor: "transparent",
        fontFamily: "Arial",
        color: "#e6e6e6",
        paddingTop: "0px",
      }}
      onClick={props.onClick}
    >
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: "22px auto",
          borderRadius: "5px",
        }}
      >
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesomeIcon icon={props.icon} />
        </Col>
        <Form.Label
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "5px",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {props.content}
        </Form.Label>
      </Container>
    </Button>
  );
}

export default SideBarButton;

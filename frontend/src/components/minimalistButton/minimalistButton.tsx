import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

interface MinimalistButtonProps {
  icon: IconProp;
  onClick: () => void;
}

function MinimalistButton(props: MinimalistButtonProps) {
  return (
    <Button
      style={{
        background: "transparent",
        borderColor: "transparent",
      }}
      onClick={props.onClick}
    >
      <FontAwesomeIcon icon={props.icon} />
    </Button>
  );
}
export default MinimalistButton;

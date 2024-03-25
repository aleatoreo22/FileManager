import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import imageDesktop from "../../assets/images/DesktopFolder.png";
import imageDocument from "../../assets/images/DocumentFolder.png";
import imageDownload from "../../assets/images/DownloadFolder.png";
import imageImage from "../../assets/images/ImageFolder.png";
import imageMusic from "../../assets/images/MusicFolder.png";
import imagePublic from "../../assets/images/PublicFolder.png";
import imageVideo from "../../assets/images/VideoFolder.png";
import imageDefault from "../../assets/images/DefaultFolder.png";

interface FolderIconProps {
  name: string;
  size: string;
  onClick: () => void;
}

function FolderIcon(props: FolderIconProps) {
  const [imageFolder, setImageFolder] = useState<string>("");
  useEffect(() => {
    let image: string = "";
    switch (props.name) {
      case "Desktop":
        image = imageDesktop;
        break;
      case "Documents":
        image = imageDocument;
        break;
      case "Downloads":
        image = imageDownload;
        break;
      case "Music":
        image = imageMusic;
        break;
      case "Pictures":
        image = imageImage;
        break;
      case "Public":
        image = imagePublic;
        break;
      case "Videos":
        image = imageVideo;
        break;
      default:
        image = imageDefault;
        break;
    }
    setImageFolder(image);
  }, []);
  return (
    <Button
      style={{
        background: "transparent",
        borderColor: "transparent",
        margin: "5px",
      }}
      onClick={props.onClick}
    >
      <Container
        style={{
          height: props.size + "px",
          width: props.size + "px",
          padding: "0px",
          display: "grid",
        }}
      >
        <Row>
          <img src={imageFolder} />
        </Row>
        <Row
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <label style={{ pointerEvents: "none" }}>{props.name}</label>
        </Row>
      </Container>
    </Button>
  );
}

export default FolderIcon;

import "./App.css";
import { SearchPath } from "../wailsjs/go/main/App";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faClock,
  faDownload,
  faFile,
  faHome,
  faImage,
  faMusic,
  faPlus,
  faStar,
  faTrash,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./components/header/Header";
import SideBarButton from "./components/sideBarButton/sideBarButton";
import { useEffect, useState } from "react";
import FolderIcon from "./components/folderIcon/FolderIcon";
import { main } from "../wailsjs/go/models";

function App() {
  const [pathContent, setPathContent] = useState<main.PathContent[]>();
  const headrSize = 50;

  function LoadPathContent(path: string) {
    SearchPath().then((result) => {
      setPathContent(result);
    });
  }

  useEffect(() => {
    LoadPathContent("");
  }, []);

  return (
    <div id="App">
      <Container
        style={{
          maxWidth: "100%",
          background: "#242424",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Row
          id="Header"
          style={{
            height: headrSize + "px",
            background: "#171717",
            borderBottom: "1px solid #121212",
          }}
        >
          <Header />
        </Row>
        <Row
          style={{
            height: "calc(100vh - " + headrSize + "px)",
            display: "flex",
          }}
        >
          <Col
            style={{
              maxWidth: "300px",
              padding: "10px",
              background: "#1f1f1f",
              borderRight: "2px solid #121212",
              overflowY: "auto",
              height: "100%",
            }}
          >
            <SideBarButton content="Recent" icon={faClock} onClick={() => {}} />
            <SideBarButton content="Starred" icon={faStar} onClick={() => {}} />
            <SideBarButton content="Home" icon={faHome} onClick={() => {}} />
            <SideBarButton
              content="Documents"
              icon={faFile}
              onClick={() => {}}
            />
            <SideBarButton
              content="Downloads"
              icon={faDownload}
              onClick={() => {}}
            />
            <SideBarButton content="Music" icon={faMusic} onClick={() => {}} />
            <SideBarButton
              content="Pictures"
              icon={faImage}
              onClick={() => {}}
            />
            <SideBarButton content="Videos" icon={faVideo} onClick={() => {}} />
            <SideBarButton content="Trash" icon={faTrash} onClick={() => {}} />
            <div
              style={{
                width: "100%",
                borderBottom: "1px solid #121212",
                paddingTop: "10px",
                marginBottom: "10px",
              }}
            />
            <SideBarButton
              content="Other Locations"
              icon={faPlus}
              onClick={() => {}}
            />
          </Col>
          <Col
            id="Folders"
            style={{
              padding: "10px",
              color: "white",
              textAlign: "start",
            }}
          >
            {pathContent?.map((element) => (
              <FolderIcon name={element.name} onClick={() => {}} size="100" />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

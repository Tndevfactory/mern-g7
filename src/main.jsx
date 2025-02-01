import { IKContext } from "imagekitio-react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "rsuite/dist/rsuite.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

createRoot(document.getElementById("root")).render(
  <IKContext
    publicKey="public_erTQtgGV29R5wWJOI+vbjhEnLH8="
    urlEndpoint="https://ik.imagekit.io/tndev"
    transformationPosition="path"
    authenticationEndpoint="http://www.yourserver.com/auth"
  >
    <App />
  </IKContext>
);

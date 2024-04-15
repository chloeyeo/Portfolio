import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense
    fallback={
      <div>
        {/* image in public folder -> "./images" if image in src-> assets we must import image first */}
        <img src="./images/loading.gif" alt="loading" />
      </div>
    }
  >
    <Router>
      <App />
    </Router>
  </Suspense>
);

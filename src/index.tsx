import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as swDev from "./serviceworker";
import getApolloClient from "./getApolloClient";
import { ApolloProvider } from "@apollo/client";
const client = getApolloClient().then((client: any) => {
  if (client) {
     ReactDOM.render(
      <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
});
reportWebVitals();
swDev.register();

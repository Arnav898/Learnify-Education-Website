import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Auth0Provider
    domain="dev-zczv5dl1cwooox6c.us.auth0.com"
    clientId="cNOVORhTkJ6yVVlE96aV8rKetZfIYw1d"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)

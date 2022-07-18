import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { AppProvider, WebAuth0AuthClient } from '@8base/react-sdk';

const URI = 'https://api.8base.com/ckydoseyf000009mpaqn6cfgw'
const auth0WebClient = new WebAuth0AuthClient({
  domain: "https://61e0c974e7c539000962e0ef.auth.us-east-1.amazoncognito.com", // domain client information from authentication page
  clientId: "3hb2aepjpalpdum1jdki65ob0l", // client id information
  redirectUri: `${window.location.origin}/auth/callback`, // the callback url you set
  logoutRedirectUri: `${window.location.origin}/`, // logout url you entered
});
const client = new ApolloClient({
  uri: "https://api.8base.com/ckydoseyf000009mpaqn6cfgw"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppProvider uri={URI} authClient={auth0WebClient}>
      {({ loading }) => {
        if (loading) {
          return <p>Please wait...</p>;
        }
        return <App />;
      }}
    </AppProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

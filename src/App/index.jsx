import React from 'react';
import { ContextWrapper } from 'Utils/Store';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from 'Components/Header';
import Footer from 'Components/Footer';

import Routes from './Routes';
import './app.scss';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URL,
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <ContextWrapper>
        <div className="app" data-test="app">
          <Header />
          <Routes />
          {/* <Footer /> */}
        </div>
      </ContextWrapper>
    </ApolloProvider>
  );
};

export default App;

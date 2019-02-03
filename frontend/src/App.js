import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';

const theme = {
  grey: '#B9B4AF',
  main: '#232323',
};

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Work+Sans|Sarabun'); */

  * {
    box-sizing:border-box;
    padding:0;
    margin:0;
  }
  html {
    font-size:62.5%;
  }
  body {
    color:${props => props.theme.main};
    font-size:2.4rem;
  }
  h1,h2,h3,h4,h5,h6 { font-weight:600; }
  p,span,a,label,button,textarea,li,figcaption { font-size:1.6rem; }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const client = new ApolloClient({
  uri: 'https://nodejs-d46mbauhe.now.sh',
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Body />
        <Footer />
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;

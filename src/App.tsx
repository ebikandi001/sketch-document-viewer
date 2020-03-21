import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DocumentProvider } from 'adapters';
import { DocumentView, ArtboardView } from './ui/pages';

const AppContainer = styled.div`
  background-color: rgb(33, 33, 33);
  height: 100vh;
`;

const App = () => (
  <AppContainer className="App">
    <DocumentProvider>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={DocumentView} />
          <Route path="/artboard/:id" component={ArtboardView} />
        </Switch>
      </Router>
    </DocumentProvider>
  </AppContainer>
);

export default App;

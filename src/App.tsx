import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DocumentProvider } from 'adapters';
import { DocumentView } from './ui/pages';

const AppContainer = styled.div`
  background-color: rgb(33, 33, 33);
  height: 100vh;
`;

const App = () => (
  <AppContainer className="App">
    <DocumentProvider>
      <Router>
        <Switch>
          <Route path="/" component={DocumentView} />
        </Switch>
      </Router>
    </DocumentProvider>
  </AppContainer>
);

export default App;

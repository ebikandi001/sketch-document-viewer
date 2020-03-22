import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { DocumentProvider } from 'adapters';
import { DocumentView, ArtboardView } from './ui/pages';

const AppContainer = styled.div`
  background-color: rgb(33, 33, 33);
  height: 100vh;
`;

const App = () => {
  const [redirect, setRedirect] = useState(true);
  useEffect(() => {
    setRedirect(false);
  }, []);

  return (
    <AppContainer className="App">
      <DocumentProvider>
        <Router>
          <Switch>
            {redirect ? <Redirect to="/document/Y8wDM" /> : null}
            <Route path="/document/:id" component={DocumentView} />
            <Route path="/artboard/:id" component={ArtboardView} />
          </Switch>
        </Router>
      </DocumentProvider>
    </AppContainer>
  );
};
export default App;

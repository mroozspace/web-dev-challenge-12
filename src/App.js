import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import theme from '../src/config/theme';
import {ThemeProvider} from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import NotFound from './components/NotFound';
import FadeInContainer from './components/FadeIn';

const App = () => (
  <ThemeProvider theme={ theme }>
    <Router>
      <Switch>
        <Route exact path="/" component={ FadeInContainer(Home) } />
        <Route exact path="/about" component={ FadeInContainer(About) } />
        <Route exact path="/works" component={ FadeInContainer(Works) } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;

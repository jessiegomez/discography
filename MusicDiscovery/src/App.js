/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import ArtistsList from './ArtistsList';
import ArtistDetail from './ArtistDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>Discogra(FEED)</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={ArtistsList} />
        <Route
          exact
          path="/:id"
          render={props => (
            <ArtistDetail {...props} pass_to_page_content="hi" />
          )}
        />
      </Switch>
    </div>
  </Router>
);

export default App;

// const Test = ({ match }) => (
//   <h1>{match.params.id}</h1>
// );

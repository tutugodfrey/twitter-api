import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import MakeSchool from '../components/MakeSchool';
import Home from '../components/Home';
import Main from '../components/NewSyCombinator';
import YCombinator from '../components/YCombinator';



export default () => (
  <BrowserRouter>
    <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/makeschool">@Makeschool</Link>
      </li>
      <li>
        <Link to="/newsycombinator">@newsYcombinator</Link>
      </li>
      <li>
        <Link to='/ycombinator'>@ycombinator</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/makeschool"  exact component={MakeSchool} />
      <Route path="/newsycombinator" exact component={Main} />
      <Route path="/ycombinator" component={YCombinator} />
    </Switch>
    </div>
  </BrowserRouter>
)
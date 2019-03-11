import React from 'react';
import { Switch, Route } from 'react-router-dom';

import imageupload from './imageupload';
import News from './News';
import About from './About';


const Main = () => (
  <Switch>
    <Route exact path="/" component={imageupload} />
    <Route path="/about" component={About} />
    <Route path="/news" component={News} />
  </Switch>
)

export default Main;

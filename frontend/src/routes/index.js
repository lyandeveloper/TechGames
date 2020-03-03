import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import New from '../pages/New';
import Post from '../pages/Post';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/post/new" exact component={New} />
      <Route path="/post/:id/:slug" exact component={Post} />
    </Switch>
  );
}

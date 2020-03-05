import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import New from '../pages/New';
import Post from '../pages/Post';
import Category from '../pages/Category';
import Search from '../pages/Search';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/post/new" exact component={New} />
      <Route path="/post/:id/:slug" exact component={Post} />
      <Route path="/post/search/" exact component={Search} />
      <Route path="/category/:category" exact component={Category} />
    </Switch>
  );
}

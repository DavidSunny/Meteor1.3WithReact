import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import { AppContainer } from './modules/app_layout/imports/AppContainer.jsx';
import { Layout } from './modules/app_layout/imports/Layout.jsx';
import { AppNotFound } from './modules/app_layout/imports/AppNotFound.jsx';
import { HomeContainer } from './modules/home/imports/HomeContainer.jsx';
import { PostContainer } from './modules/post/imports/PostContainer.jsx';
import { PostNew } from './modules/post/imports/PostNew.jsx';

const RouterWrapper = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} >
      <Route component={Layout}>
        <IndexRoute component={HomeContainer} />
        <Route path='home' component={HomeContainer}/>
        <Route path='post' component={PostContainer}/>
        <Route path='post/new' component={PostNew}/>
        <Route path='*' component={AppNotFound}/>
      </Route>
    </Route>
  </Router>
);

Meteor.startup(function(){
  if (Meteor.isClient) {
    const rootElement = document.createElement('div');

    rootElement.setAttribute('id', 'app-container');
    document.body.appendChild(rootElement);

    const serverContainer = document.getElementById('app-container-for-SSR');
    if (serverContainer) {
      serverContainer.setAttribute('class', 'invisible');
    }

    ReactDOM.render(RouterWrapper, rootElement);
  }

  if (Meteor.isServer) {
    // Server side rendering
    const RoutesWrapper = (
      <Route path="/" component={AppContainer} >
        <Route component={Layout}>
          <IndexRoute component={HomeContainer} />
          <Route path='home' component={HomeContainer}/>
          <Route path='post' component={PostContainer}/>
          <Route path='post/new' component={PostNew}/>
          <Route path='*' component={AppNotFound}/>
        </Route>
      </Route>
    );

    const clientOptions = {
      rootElementType: 'div',
      rootElement: 'app-container-for-SSR'
    };

    const serverOptions = {};

    ReactRouterSSR.Run(RoutesWrapper, clientOptions, serverOptions);
  }
});





var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);

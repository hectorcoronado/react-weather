var React = require('react'),
    ReactDOM = require('react-dom'),
    Greeter = require('./components/Greeter');

var firstName = "Leeloo Multipass";

ReactDOM.render(
  <Greeter name={ firstName }/>,
  document.getElementById('app')
);

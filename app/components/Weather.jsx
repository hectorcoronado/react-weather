var React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  handleSearch: function (location) {
    console.log(location);
  },

  getInitialState: function () {
    return {}
  },

  render: function () {
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage/>
      </div>
    );
  }
});

module.exports = Weather;

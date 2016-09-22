var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h2 className="text-center page-title">It is {temp} degrees in {location}.</h2>
  );
}

module.exports = WeatherMessage;

var React = require('react');

var About = (props) => {
  return (
    <div>
      <h2 className="text-center page-title">About</h2>
      <p>I built this app to teach myself the fundamentals of <strong>React</strong>, to familiarize myself with the <strong>Foundation</strong> library, and to utilize the <strong>Open Weather Map</strong> external API. I recently finished General Assembly's Web Development Immersive course, and am expanding on my knowledge of frameworks, JavaScript and Object Oriented Programming!</p>
      <ul>
        <li>
          Check out my GitHub repo <a href="https://github.com/hectorcoronado/react-weather" target="_blank">here</a>!
        </li>
        <li>
          Please visit my <a href="http://hectorcoronado.codes" target="_blank">portfolio</a>.
        </li>
        <li>
          And please <a href="mailto:hectorcoronado.developer@gmail.com?subject=I%20visited%20your%20weather%20app!">contact me</a> if you would like to speak to me about web development, I'd love to build something for you.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;

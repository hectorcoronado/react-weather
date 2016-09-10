var React = require('react'),
    {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h2 className="text-center">Examples</h2>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Oakland'>Oakland, CA</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris, France</Link>
        </li>
        <li>
          <Link to='/?location=Barcelona'>Barcelona, Spain</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples

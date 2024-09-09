import PropTypes from 'prop-types';

function Button({ source }) {
  function handleClick() {
    const link = source;
    if (typeof link === 'string' && link.startsWith('http')) {
      window.location.href = link;
    } else {
      console.error(`Invalid URL: ${link}`);
    }
  }

  return (
    <div>
      <span></span>
      <button onClick={handleClick}>View Recipe</button>
    </div>
  );
}

Button.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Button;
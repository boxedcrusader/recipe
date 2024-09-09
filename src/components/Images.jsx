import PropTypes from 'prop-types';

function Images({ source, textClass, strongText, imgClass }) {
    return (
            <div className={imgClass}>
                <img src={source} alt="" srcSet="" />
                <div className={textClass}><strong>{strongText}</strong></div>
            </div>
    );
}

Images.propTypes = {
  source: PropTypes.string.isRequired,
  textClass: PropTypes.string,
  imgClass: PropTypes.string, // customClass is optional
  strongText: PropTypes.string,  // strongText is optional
};

export default Images;

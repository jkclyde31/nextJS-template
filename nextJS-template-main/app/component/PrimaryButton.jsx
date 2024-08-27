import PropTypes from 'prop-types';

const PrimaryButton = ({ text, className = '', width }) => {
  return (
    <button
      className={`bg-gradient-to-b from-[#373737] to-[#000000]
         text-white text-[15px] 
        max-w-[${width}]
        nav-break:mx-auto
         font-nunito font-bold py-4 px-[50px] rounded-sm shadow-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto ${className}`}
    >
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.string, 
};

export default PrimaryButton;

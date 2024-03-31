import PropTypes from "prop-types";

export default function Button({
  newClass,
  fontawesome,
  type,
  text,
  backColor,
  textColor,
  className,
}) {
  return (
    <button
      type={type}
      className={`${backColor} ${textColor} pr-4 pl-4 pt-2 pb-2 rounded-md font-bold ${newClass} ${className}`}
    >
      <i className={fontawesome}></i>
      {"  "}
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  backColor: PropTypes.string,
  textColor: PropTypes.string,
  fontawesome: PropTypes.string,
  className: PropTypes.string,
};

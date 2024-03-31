import PropTypes from "prop-types";

export default function Input({ type, placeholder, ...rest }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 pl-4 pr-4 bg-transparent text-black border-black border rounded w-full"
      {...rest}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

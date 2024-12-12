/* eslint-disable react/prop-types */

function Button({ children, type, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${type}`}
    >
      {children}
    </button>
  );
}

export default Button;

/* eslint-disable react/prop-types */

function Button({ children, type, onClick }) {
  return (
    <button onClick={onClick} className={`btn btn--${type}`}>
      {children}
    </button>
  );
}

export default Button;

const Button = ({ text, className, disabled, onClick }) => {
  const style = `button ${className || ''}`;

  return (
    <button
      disabled={disabled}
      className={style}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

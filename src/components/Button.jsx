const Button = ({ children, color, onclick }) => {
  return (
    <div>
      <button onClick={onclick} className={`btn btn-${color} mt-3`}>
        {children}
      </button>
    </div>
  );
};

export default Button;

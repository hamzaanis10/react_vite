const Alert = ({ children }) => {
  return (
    <div>
      <div class="alert alert-primary" role="alert">
        {children}
      </div>
    </div>
  );
};

export default Alert;

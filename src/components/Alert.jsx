const Alert = ({ children, onClose }) => {
  return (
    <div>
      <div class="alert alert-primary alert-dismissible" role="alert">
        {children}
        <button
          onClick={onClose}
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Alert;

const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length == 0 && (
        <div className="alert-empity">
          <p className="alert alert-danger" role="alert">
            I am still Hungry, give some food.
          </p>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;

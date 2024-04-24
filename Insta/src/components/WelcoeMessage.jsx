const WelcomeMessage = ({onGetPostClick}) => {
  return (
    <center>
      <h1 className="welcome-message">There are no posts</h1>
      {/* <button type="button"  className="btn btn-info" onClick={onGetPostClick}>Get post from server</button> */}
    </center>
  );
};

export default WelcomeMessage;

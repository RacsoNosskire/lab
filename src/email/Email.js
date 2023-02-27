function Email() {
  //   function buttunClicked() {
  //     console.log("buttonclicked");
  //   }

  //   event.target/"buttonclicked"
  const [input, setInput] = "blablabla";
  const buttonClicked = () => {
    console.log("buttonclicked");
  };
  return (
    <div className="container mt-3">
      <article className="box">
        <h1 className="display-4 mb-4">Sign up</h1>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInputAgain" className="form-label">
            Enter again
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInputAgain"
            placeholder="name@example.com"
          />
        </div>
        <div className="d-grid gap-2 mx-auto">
          <button type="button" className="btn btn-primary btn-block mt-3 mb-1">
            OK
          </button>
        </div>

        <button
          onClick={() => {
            console.log("Hello");
          }}
          className="btn btn-primary btn-lg"
        >
          OK1
        </button>
        <button
          onClick={(event) => {
            console.log(event);
          }}
          className="btn btn-primary btn-lg"
        >
          OK2
        </button>
        <button onClick={buttonClicked} className="btn btn-primary btn-lg">
          OK3
        </button>
        <div className="alert alert-success mt-3" role="alert">
          Success message
        </div>
        <div className="alert alert-danger mt-3" role="alert">
          Error message
        </div>
      </article>
    </div>
  );
}

export default Email;

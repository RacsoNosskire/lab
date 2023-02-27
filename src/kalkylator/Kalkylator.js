function Kalkylator() {
  return (
    <div className="container mt-3">
      <article className="box">
        <h1 className="display-4 mb-4">Kalkylator</h1>
        <div className="mb-3">
          <label htmlFor="KalkylatorInput" className="form-label">
            Result
          </label>
          <input type="result" className="form-control" id="Input" />
        </div>
        <div className="mb-3 mt-5">
          <label htmlFor="Input" className="form-label">
            Enter first input:
          </label>
          <input type="input" className="form-control" id="InputAgain" />
        </div>
        <div class="container text-center">
          <div class="row">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              ></input>
              <label class="btn btn-outline-primary" for="btnradio1">
                +
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              ></input>
              <label class="btn btn-outline-primary" for="btnradio2">
                -
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              ></input>
              <label class="btn btn-outline-primary" for="btnradio3">
                *
              </label>
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio4"
                autocomplete="off"
              ></input>
              <label class="btn btn-outline-primary" for="btnradio4">
                /
              </label>
            </div>
          </div>
        </div>
        <br></br>
        <label htmlFor="InputAgain" className="form-label">
          Enter Second input:
        </label>
        <input type="email" className="form-control" id="emailInputAgain" />
        <button className="btn btn-primary btn-lg mt-5">=</button>
      </article>
    </div>
  );
}

export default Kalkylator;

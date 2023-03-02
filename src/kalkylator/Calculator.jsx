import { useRef, useState } from "react";

function Calculator() {
  const [input, setInput] = useState(0);
  const inp1 = useRef(null);
  const inp2 = useRef(null);

  const AddNumbers = () => {
    setInput(Number(inp1.current.value) + Number(inp2.current.value));
  };
  function SubNumbers() {
    setInput(Number(inp1.current.value) - Number(inp2.current.value));
  }
  const MultiplyNumbers = () => {
    setInput(Number(inp1.current.value) * Number(inp2.current.value));
  };
  const DivideNumbers = () => {
    setInput(Number(inp1.current.value) / Number(inp2.current.value));
  };
  const SquarexByY = () => {
    setInput(Math.pow(Number(inp1.current.value), Number(inp2.current.value)));
  };

  const SquareRoot = () => {
    setInput(Math.sqrt(input));
  };

  const ClearInputs = () => {
    inp1.current.value = null;
    inp2.current.value = null;
    setInput(0);
  };

  return (
    <div className="container mt-3">
      <article className="box">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Super calculator 3000</h3>
            <div className="col mt-3">
              <div className="block mb-3">
                <label>Result</label>
                <input
                  className="inputPos"
                  type="text"
                  value={input}
                  onChange={input}
                  disabled
                />
              </div>
              <div className="mt-3 mb-3">
                <label>Input first value</label>
                <input ref={inp1} type="number" id="input1" />
              </div>

              <div className="text-center">
                <div className="row">
                  <div className="col-md-12 bg-light text-right">
                    <button
                      type="button"
                      className="btn btn-primary  "
                      onClick={AddNumbers}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary  "
                      onClick={SubNumbers}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={MultiplyNumbers}
                    >
                      x
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={DivideNumbers}
                    >
                      ÷
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={SquarexByY}
                    >
                      xʸ
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={SquareRoot}
                    >
                      √
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => ClearInputs()}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label>Input second value</label>
                <input ref={inp2} type="number" id="input2" />
              </div>
            </div>
          </div>
          <div className="col col-md-auto text-area">History</div>
        </div>
      </article>
    </div>
  );
}

export default Calculator;

import { useState } from "react";

const Calc = () => {
  const [displayValue, setDisplayValue] = useState("");

  const opr = ["+", "-", "/", "*", ".", "%"];

  const updatedCalc = (value) => {
    console.log(value);
    if (
      (opr.includes(value) && displayValue === "") ||
      (opr.includes(value) && opr.includes(displayValue.slice(-1)))
    ) {
      return;
    }

    value === "ac"
      ? setDisplayValue("")
      : setDisplayValue(displayValue + value);

    if (!opr.includes(value)) {
      setDisplayValue(eval(displayValue + value).toString());
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-[#FAFFAF] h-screen overflow-auto  grid place-content-center">
          <div className="bg-[#06113C] rounded-xl p-10">
            <div className="text-white bor overflow-x-auto overflow-y-hidden h-28 text-8xl text-right pr-10 rounded-xl w-[500px] bg-[#06113C]">
              {displayValue === "" ? "0" : displayValue}
            </div>
            <div className="grid grid-cols-4 items-center gap-y-8 pl-10 mt-16">
              <button
                onClick={() => {
                  updatedCalc("ac");
                }}
                className="up-key "
              >
                AC
              </button>

              <button
                onClick={() => {
                  updatedCalc("%");
                }}
                className="up-key"
              >
                %
              </button>
              <button
                onClick={() => {
                  updatedCalc(".");
                }}
                className="up-key "
              >
                <svg
                className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  updatedCalc("/");
                }}
                className="side-key"
              >
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="0.88em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M400 224H48c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.31 32-32S417.7 224 400 224zm-176-80c26.47 0 48-21.53 48-48s-21.53-48-48-48s-48 21.53-48 48s21.5 48 48 48zm0 224c-26.47 0-48 21.53-48 48s21.53 48 48 48s48-21.53 48-48s-21.5-48-48-48z"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  updatedCalc("7");
                }}
                className="down-key"
              >
                7
              </button>
              <button
                onClick={() => {
                  updatedCalc("8");
                }}
                className="down-key"
              >
                8
              </button>
              <button
                onClick={() => {
                  updatedCalc("9");
                }}
                className="down-key"
              >
                9
              </button>
              <button
                onClick={() => {
                  updatedCalc("*");
                }}
                className="side-key"
              >
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 12L6 6m6 6l6 6m-6-6l6-6m-6 6l-6 6"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  updatedCalc("4");
                }}
                className="down-key"
              >
                4
              </button>
              <button
                onClick={() => {
                  updatedCalc("5");
                }}
                className="down-key"
              >
                5
              </button>
              <button
                onClick={() => {
                  updatedCalc("6");
                }}
                className="down-key"
              >
                6
              </button>
              <button
                onClick={() => {
                  updatedCalc("-");
                }}
                className="side-key"
              >
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  updatedCalc("1");
                }}
                className="down-key"
              >
                1
              </button>
              <button
                onClick={() => {
                  updatedCalc("2");
                }}
                className="down-key"
              >
                2
              </button>
              <button
                onClick={() => {
                  updatedCalc("3");
                }}
                className="down-key"
              >
                3
              </button>
              <button
                onClick={() => {
                  updatedCalc("+");
                }}
                className="side-key"
              >
                <svg
                  className="h-10 w-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                  />
                </svg>
              </button>
              <button
                onClick={() => {
                  updatedCalc("0");
                }}
                className="text-white font-bold mx-auto text-center px-10 py-3  text-3xl bg-[#694E4E]  rounded-full hover:bg-[#4A403A] transition-all duration-300 ease-in-out col-span-3"
              >
                0
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calc;

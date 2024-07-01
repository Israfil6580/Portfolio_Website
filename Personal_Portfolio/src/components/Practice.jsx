import { useReducer } from "react";

const Practice = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
      case "DECREMENT":
        return { ...state, count: state.count - 1 };
      case "HIDEIMAGE":
        return { ...state, hide: !state.hide };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0, hide: false });

  const Increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const Decrement = () => {
    if (state.count > 0) {
      dispatch({ type: "DECREMENT" });
    }
  };

  const Hidden = () => {
    dispatch({ type: "HIDEIMAGE" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center gap-6">
      <div className="flex gap-2 items-center mt-40">
        <h1 className="text-4xl font-bold">Count: {state.count}</h1>
        <div className="flex gap-1 items-center">
          <button
            className="px-4 py-1 bg-green-500 text-black rounded-xl font-sans font-bold hover:bg-green-600 hover:text-blue-800 transition-transform"
            onClick={Increment}
          >
            Increment
          </button>
          <button
            className="px-4 py-1 bg-green-500 text-black rounded-xl font-sans font-bold hover:bg-green-600 hover:text-blue-800 transition-transform"
            onClick={Decrement}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-40">
        <img
          src="https://cdn.pixabay.com/video/2015/08/08/125-135736646_tiny.jpg"
          className={`rounded-full ${state.hide ? "invisible" : ""}`}
          alt=""
        />
        <div>
          <button
            className="px-4 py-1 bg-green-500 text-black rounded-xl font-sans font-bold hover:bg-green-600 hover:text-blue-800 transition-transform"
            onClick={Hidden}
          >
            {state.hide ? "Show Image" : "Hide Image"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;

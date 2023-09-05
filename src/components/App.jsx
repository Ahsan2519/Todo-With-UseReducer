import "../assets/App.css";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="max-w-[1440px] w-[90%] md:w-1/2 mx-auto py-10">
      <h1 className="text-center font-[700] text-[16px] md:text-2xl mb-4">
        TODO APP USING REACT HOOKS AND LOCALSTORAGE
      </h1>
      <Todo />
    </div>
  );
};

export default App;

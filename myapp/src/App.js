import logo from "./logo.svg";
import "./App.css";

function App() {
  // let name = "Amogh";
  // let list = ["mumbai", "delhi", "kolkata", "chennai"];
  let title = "onclick demo   dad";
  let myfun = () => {
    alert("hello");
  };
  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="click" onClick={myfun} />
    </div>
  );
}

export default App;

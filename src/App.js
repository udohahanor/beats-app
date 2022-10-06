import './App.css';
import { SiBeatsbydre } from "react-icons/si";
import { TbMenu } from "react-icons/tb";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <SiBeatsbydre size="2em"/>
        <ul className="navlinks">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <TbMenu size="2em"/>
      </div>
    </div>
  );
}

export default App;

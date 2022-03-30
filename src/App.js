import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-matt-bg-500 grid grid-cols-1 h-screen">
      
      <div className="bg-matt-primary-500 h-2/3 grid relative content-center">
        <img
          className="opacity-30 object-cover absolute h-full w-full"
          src={process.env.PUBLIC_URL + "/images/home-page.jpeg"}
        ></img>
        <div className=" ">
          <h1 className="font-bold text-7xl p-6 text-white">
            Physical Therapy and Wellness regardless of where you are
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {UserContainer} from "./components/UserContainer/UserContainer";
import {useState} from "react";

const App = () => {
    const [show, setShow] = useState(true   )
  return (
      <>
          <p>{show ?  "Show" : "Hidden"}</p>
          {show && <UserContainer/>}
      </>
  );
};

export default App;

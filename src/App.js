
import './App.css';
import UserComponent from "./components/UserComponent/UserComponent";

const firstDiv = <div>Hello Word</div>
const App = () => {
  return (
    <>
      <div>
        Hello word
      </div>
      <UserComponent
          name={'Ihor'}
          userName={'dev'}
          nickName={'js'}
          element = {firstDiv}
      />
        <UserComponent
            name={' ne Ihor'}
            userName={'ne dev'}
            nickName={'ne  js'}
            element = {firstDiv}
        />
    </>
  );
};

export default App;

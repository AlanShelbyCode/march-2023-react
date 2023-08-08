import './App.css';
import {useState} from "react";
import PostContainer from "./components/PostContainer/PostContainer";
import SpaceCopmonent from "./components/SpaceComponent/SpaceCopmonent";

//
// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
const App = () => {
  return (
      <>
          {/*<UserContainer/>*/}
          {/*<PostContainer/>*/}
          <SpaceCopmonent/>

      </>
  );
};

export default App;

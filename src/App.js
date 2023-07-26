import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
const App = () => {
  return (
    <>
        {/*Описати всю сім'ю сімпсонів (5 персонажів). Характеристики : ім‘я приізвище вік стать,*/}
        {/*фотографія (посиланням на зовнішній ресурс,тобто не локальна фотка) Інфу брати звідки завгодно,хоч придумайте.*/}
        {/*Але для цього є сайт який ви юзали на жс*/}
        <h1>Task 1 Simpson</h1>
        <Simpsons id = {1} name={'Bart'} surname={"Simpson"} age={10}
                 photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
        <Simpsons id = {2} name={'Homer'} surname={"Simpson"} age={38}
                 photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        <Simpsons id = {3} name={'Marge'} surname={"Simpson"} age={35}
                  photo={'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}/>
        <Simpsons id = {4} name={'Liza'} surname={"Simpson"} age={12}
                  photo={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>
        <Simpsons id = {5} name={'Maggie'} surname={"Simpson"} age={1}
                  photo={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
        {/*Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
        {/*https://rickandmortyapi.com/*/}
        {/*https://rickandmortyapi.com/api/character*/}
        {/*Створити (описати) 6 персонажів з цьго апі.*/}
        <h1>Task 2 RickAndMorty</h1>
        <RickAndMorty id = {1} name={'Rick'} status={"Alive"} species={"Human"} gender={"Male"}
                      image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
        <RickAndMorty id = {2} name={'Morty'} status={"Alive"} species={"Human"} gender={"Male"}
                      image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
        <RickAndMorty id = {3} name={'Summer'} status={"Alive"} species={"Human"} gender={"Famale"}
                      image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
        <RickAndMorty id = {4} name={'Beth'} status={"Alive"} species={"Human"} gender={"Famale"}
                      image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
        <RickAndMorty id = {5} name={'Jerry'} status={"Alive"} species={"Human"} gender={"Male"}
                      image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
        <RickAndMorty id = {6} name={'Abadango Cluster Princess'} status={"Alive"} species={"Human"} gender={"Famale"}
                      image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>


    </>
  );
};

export default App;

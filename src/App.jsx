import { useState } from "react";
// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

  const [ dogUrl, setDogUrl ] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");

  const changePicture = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setDogUrl(result.message);
        }
      )
  }

  return (
    <div>
      <header>Dogアプリ</header>
      <p>イヌの画像を表示するサイト</p>
      <img src={dogUrl} alt="dog" />
      <div>
        <button onClick={changePicture}>更新</button>
      </div>
    </div>
  )
}

import DogImage from "./DogImage"
import { useState } from "react";

export function Description () {
  const [imageUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
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
    <>
      <DogImage imageUrl={imageUrl} changePicture={changePicture}/>
    </>
  )
}

export default Description;

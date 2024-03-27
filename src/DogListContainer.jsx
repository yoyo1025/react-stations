import { useState, useEffect } from "react";
import BreedsSelect from "./BreedsSelect";
// @ts-check

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(
    () => {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(
          (result) => {
            setBreeds(Object.keys(result.message));
          }
        )
    },[]);
  return (
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
  )
}

export default DogListContainer



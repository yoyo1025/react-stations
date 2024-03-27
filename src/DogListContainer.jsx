import { useState, useEffect } from "react";
// @ts-check

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState();

  useEffect(
    () => {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then(res => res.json())
        .then(
          (result) => {
            setBreeds(result.message);
          }
        )
    }
    ,
    []
  )
  return <></>
}

export default DogListContainer

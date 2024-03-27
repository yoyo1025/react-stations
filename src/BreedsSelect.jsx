// @ts-check
import { useEffect } from "react";

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed, orderedDogs, setOrderedDogs }) => {

  const GetDogImage = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(
        (result) => {
          setOrderedDogs(result.message);
        }
      )
  }

  return (
    <>
      <hr />
      <label>
        Breeds List
        <select onChange={(e) => setSelectedBreed(e.target.value)} value={selectedBreed}>
          {breeds.map((breed) => {
            return (
              <option value={breed} key={breed}>{breed}</option>
            )
          })}
        </select>
        <button onClick={GetDogImage}>表示</button>
      </label>
      <div>
        {orderedDogs.map((dog) => {
          return (
            <img src={dog} alt="dog" key={dog} />
          )
        })}
      </div>
    </>
  )
}

export default BreedsSelect

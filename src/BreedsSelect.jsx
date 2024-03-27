// @ts-check
export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed, dogList, setDogList }) => {

  const GetDogImage = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(res => res.json())
      .then(
        (result) => {
          setDogList(result.message);
        }
      )
  }

  return (
    <>
      <hr />
      <div className="select-dog-type">
      <label>
        Breeds List : 
        <select 
          onChange={(e) => setSelectedBreed(e.target.value)} 
          value={selectedBreed} 
          name="selectedDogType" 
        >
          {breeds.map((breed) => {
            return (
              <option value={breed} key={breed}>{breed}</option>
            )
          })}
        </select>
        <button onClick={GetDogImage}>表示</button>
      </label>
      </div>
      <hr/>
      <div>
        {dogList.map((dog) => {
          return (
            <img src={dog} alt="dog" key={dog} className="dog-picture"/>
          )
        })}
      </div>
    </>
  )
}

export default BreedsSelect

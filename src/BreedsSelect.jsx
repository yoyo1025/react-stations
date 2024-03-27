// @ts-check

export const BreedsSelect = ({breeds, selectedBreed, setSelectedBreed}) => {
  return (
    <>
        <hr/>
        <label>
          Breeds List
          <select >
            {breeds.map((breed) => {
              return (
                <option value={selectedBreed} key={breed} >{breed}</option>
              )
            })}
          </select>
        </label>
    </>
  )
}

export default BreedsSelect

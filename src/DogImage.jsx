export function DogImage ({imageUrl, changePicture}) {

  return (
    <div>
      <div className="abc">
        <p className="title">イヌの画像を表示するサイトです</p>
        <img src={imageUrl} alt="dog" className="random-dog" />
      </div>
      <div>
        <button onClick={changePicture} className="updateButton">更新</button>
      </div>
    </div>
  )
}

export default DogImage;

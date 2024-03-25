export function DogImage ({imageUrl, changePicture}) {

  return (
    <div>
      <p>イヌの画像を表示するサイト</p>
      <img src={imageUrl} alt="dog" />
      <div>
        <button onClick={changePicture}>更新</button>
      </div>
    </div>
  )
}

export default DogImage;

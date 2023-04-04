// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachImage, setActiveThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage

  const onClickImage = () => {
    setActiveThumbnailId(id)
  }

  const activeClassName = isActive ? '' : 'thumbnail-image'
  return (
    <li className="list-item">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

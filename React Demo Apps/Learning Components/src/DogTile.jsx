import PropTypes from 'prop-types';

const DogTile = ({ imgURL, imgDescription }) => {
  return (
    <div>
      <img src={imgURL} alt={imgDescription} />
      <p>{imgDescription}</p>
    </div>
  )
}

export default DogTile

DogTile.propTypes = {
  imgURL: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
}




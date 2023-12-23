import PropTypes from 'prop-types';

const DogTile = ({ imgURL, imgDescription , children}) => {
  return (
    <div>
      <img src={imgURL} alt={imgDescription} />
      <p>{imgDescription}</p>
      {children}
    </div>
  )
}

export default DogTile

DogTile.propTypes = {
  imgURL: PropTypes.string.isRequired,
  imgDescription: PropTypes.string.isRequired,
  children: PropTypes.node
}




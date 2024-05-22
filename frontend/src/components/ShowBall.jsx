import PropTypes from "prop-types";
import './ballCard.css';

const BallCard = ({ ball }) => {
  return (
    <div className="ballCard">
      <h1>{ball.name}</h1>
      <h2>Color: {ball.color}</h2>
      <h2>Size: {ball.size}</h2>
    </div>
  );
};

BallCard.propTypes = {
  ball: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
};

export default BallCard;

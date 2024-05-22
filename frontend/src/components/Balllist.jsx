import BallCard from "./BallCard";
import './ballList.css'

const BallList = (props) => { 
  const balls = props.ballList.map((ball) => (
    <BallCard key={ball._id} ball={ball} updateSelected={props.updateSelected}/>
  ));

  return (
    <div>
      <h1>Ball List</h1>
      {!props.ballList.length ? <h2>No Balls Yet!</h2> : <ul className="ballList">{balls}</ul>}
    </div>
  );
};

export default BallList;

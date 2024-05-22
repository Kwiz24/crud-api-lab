import BallForm from "./components/BallForm";
import BallList from "./components/Balllist";
import { useState, useEffect } from "react";
import * as ballService from './services/ballService';


const App = () => {
  const [ballList, setBallList] = useState([]);
  const [selectedBall, setSelectedBall] = useState(null);

  useEffect(()=> {
    const fetchBalls = async() => {
      const balls = await ballService.fetchBalls();
      setBallList(balls);
    }
    fetchBalls();
  }, []);

  const updateSelected = async(ball) => {
    setSelectedBall(ball);
    console.log(selectedBall);
  }

  return (
    <>
      <BallList ballList={ballList} updateSelected={updateSelected}/>
      <BallForm ball={selectedBall} setBallList={setBallList} ballList={ballList}/>
    </>
  )
}

export default App;
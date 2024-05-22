import { useState, useEffect } from "react";
import * as ballService from '../services/ballService';

const BallForm = ({ ball, setBallList, ballList }) => {
  const [ formData, setFormData ] = useState({
    name: '',
    color: '',
    size: ''
  })

  useEffect(() => {
    if (ball) {
      setFormData({
        name: ball.name,
        color: ball.color,
        size: ball.size
      })
    }
  }, [ball]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(ballList);
    try {
        if (ball) {
            await ballService.updateBall(formData, ball._id);
            const newList = await ballService.fetchBalls();
            setBallList(newList);
        } else {
            const newBall = await ballService.createBall(formData);
            setBallList([...ballList , newBall]);
        }
       
    } catch (error) {
        console.log(error);
    }
};

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <label style={{ alignSelf: "flex-start" }}>Name: </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        style={{
          padding: "6px",
          width: "100%",
        }}
      />
      <label style={{ alignSelf: "flex-start" }}>Color: </label>
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
        style={{
          padding: "6px",
          width: "100%",
        }}
      />
      <label style={{ alignSelf: "flex-start" }}>Size: </label>
      <input
        type="text"
        name="size"
        value={formData.size}
        onChange={handleChange}
        style={{
          padding: "6px",
          width: "100%",
        }}
      />
      <button type="submit">{ball ? 'Update Ball' : 'Create Ball'}</button>
    </form>
  );
};

export default BallForm;

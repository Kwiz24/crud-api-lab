import './BallCard.css'

const BallCard = ({ ball, updateSelected }) => {
    
    const updateBall = () => {
        updateSelected(ball)
    }
    
    return(
        <div className="ballCard" onClick={updateBall}>
            <h1>{ball.name}</h1>
            <h2>Color: {ball.color}</h2>
            <h2>Size: {ball.size}</h2>
        </div>
    )
}

export default BallCard;
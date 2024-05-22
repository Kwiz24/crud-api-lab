const express = require('express');
const router = express.Router();

const Ball = require('../models/ball.js');


router.post('/' , async (req, res) => {
    try{
        const createdBall = await Ball.create(req.body);
        res.status(201).json(createdBall);
    }catch(e) {
        res.status(500).json({ error: e.message });
    }
});

router.get('/' , async (req, res) => {
    try{
        const allBalls = await Ball.find();
        res.status(200).json(allBalls);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

router.get('/:ballId' , async (req, res) => {
    try{
        const foundBall = await Ball.findById(req.params.ballId);
        if(!foundBall) {
            res.status(404);
            throw new Error('Ball not found.');
        }
        res.status(200).json(foundBall);
    }catch(e){
        res.status(500).json({error: e.message});
    }
});

router.delete('/:ballId', async(req, res) => {
    try{
        const deleteBall = await Ball.findByIdAndDelete(req.params.ballId);
        if(!deleteBall){
            res.status(404);
            throw new Error('Ball not found.');
        }
        res.status(200).json(deleteBall);
    }catch(e){
        res.status(500).json({error: e.message})
    }
});

router.put('/:ballId', async (req, res) => {
    try{
        const updateBall = await Ball.findByIdAndUpdate(req.params.ballId, req.body, {
            new: true,
        });
        if (!updateBall) {
            res.status(404);
            throw new Error('Ball not found.');
          }
        res.status(200).json(updateBall);
    }catch(e){
        res.status(500).json({error: e.message});
    }
})



module.exports = router;
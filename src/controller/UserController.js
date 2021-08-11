const express = require('express');
const User = require('../model/User');
const tokenUtil = require('../util/token')

module.exports = {

    async register(req, res) {

        const { email } = req.body;

        try {
            
            if(await User.findOne({ email }))
                return res.status(400).send({error: 'User already exists'})
            
            const user = await User.create(req.body);
            user.password = undefined;

            return res.send({ user, token: tokenUtil.generateToken({ id: user.id })})

        } catch (error) {
            return res.status(400).send({error: 'Registration failed'});
        }
    },

    async findById(req, res){
        const userId = req.params.userId

        try {
            const user = await User.findOne({ _id: userId })

            return res.send({ user });

        } catch (error) {
            return res.status(500).send({ message: 'Failed to load user' });
        }
    }

}
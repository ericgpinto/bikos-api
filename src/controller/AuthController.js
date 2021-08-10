const express = require('express');

const User = require('../model/User');

module.exports = {

    async register(req, res) {
        try {
            const user = await User.create(req.body);
            
            return res.send(user)

        } catch (error) {
            return res.status(400).send({error: 'Registration failed'});
        }
    }

}
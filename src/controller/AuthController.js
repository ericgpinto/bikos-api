const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/User');

const tokenUtil = require('../util/token');

module.exports = {
    
    async login(req, res){
        
        try{
            const { email, password } = req.body;
            
            const user = await User.findOne({ email }).select('+password');

            if (!user) 
                return res.status(404).send({error: 'User not found'});
            
            if (!await bcrypt.compare(password, user.password))
                return res.status(400).send({ error: 'Invalid password'});

            user.password = undefined;
            
            res.send({ 
                user, 
                token: tokenUtil.generateToken({id: user.id }) 
            })
        } catch(error){
            console.log(error)
            return res.status(400).send({message:'Error to login. Please, try again'})
        }
    }

}
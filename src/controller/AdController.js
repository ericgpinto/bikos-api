const Ad = require('../model/Ad');
const User = require('../model/User');

module.exports = {

    create: async(req, res) => {

        const userId = req.params.userId

        const announcer = await User.findOne({ _id: userId })
        
        const { description, period, category, city, neighborhood, state} = req.body;

        const ad = await Ad.create({
            description,
            period,
            announcer,
            category,
            city,
            neighborhood,
            state
        })

        return res.send(ad)
    }, 

    find: async(req, res) => {
        const ads = await Ad.find().populate('announcer')
        return res.send(ads)
    }
}
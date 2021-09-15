const Ad = require('../model/Ad');
const Address = require('../model/Address');
const User = require('../model/User');

module.exports = {

    create: async(req, res) => {

        const userId = req.params.userId

        const announcer = await User.findOne({ _id: userId })
        
        const {
            description,
            period,
            category,
            address
        } = req.body;

        const end = address
        console.log(end)

        const test = await Address.findOne({ _id: end})
        console.log(test)

        const ad = await Ad.create({
            description,
            period,
            announcer,
            category,
            test
        })

        return res.send(ad)
    }
}
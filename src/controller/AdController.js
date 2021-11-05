const Ad = require('../model/Ad');
const User = require('../model/User');
const Category = require('../model/Category');
const ActionArea = require('../model/ActionArea');

module.exports = {

    create: async(req, res) => {

        const userId = req.params.userId

        const announcer = await User.findOne({ _id: userId })
        
        const { 
            categoryId,
            description, 
            available,
            period,  
            city, 
            neighborhood, 
            state,
        } = req.body;


        const category = await Category.findOne({ categoryId})
        console.log(category)

        const ad = await Ad.create({
            category,
            description,
            available,
            period,
            announcer,
            city,
            neighborhood,
            state
        })

        return res.status(201).send(ad)
    },


    find: async(req, res) => {

        const count = await Ad.estimatedDocumentCount()
        console.log(count)

        res.header('X-Total-Count', count);

        const ads = await Ad.find()
                    .populate('announcer')
                    .populate({
                        path:'category',
                        populate: {
                            path:'actionArea',
                            model:'ActionArea'
                        }
                    })
                    .where('available').equals(true)

        return res.send(ads)
    }
}
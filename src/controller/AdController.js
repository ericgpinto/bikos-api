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
                    .populate('provider')
                    .populate({
                        path:'applicants',
                        populate: {
                            path:'user',
                            model:'User'
                        }
                    })
                    .populate({
                        path:'category',
                        populate: {
                            path:'actionArea',
                            model:'ActionArea'
                        }
                    })
                    .where('available').equals(true)

        return res.send(ads)
    },

    findById: async(req, res) => {
        const {userId} = req.params;

        try {
            const ads = await Ad.find()
                    .where('announcer').equals(userId)
                    .populate('announcer')
                    .populate({
                        path:'category',
                        populate: {
                            path:'actionArea',
                            model:'ActionArea'
                        }
                    })
            
            return res.send(ads)
                                
        } catch (error) {
            return res.status(500).send({ message: 'Failed to load ads' });
        }

    },

    getApplicants: async(req, res) => {
        const { adsId } = req.params;

        const applicants = await Ad.find()
        .populate({
            path:'applicants',
            populate: {
                path:'user',
                model:'User'
            }
        })
        .where('_id').equals(adsId)

        return res.send(applicants)

    },

    selectCandidate: async(req, res) => {
        const { adsId, userId } = req.params;

        const provider = await User.findOne({ _id: userId })

        const filter = { '_id': adsId }
        const update = { 'provider': provider, 'available': false }

        const query = await Ad.findOneAndUpdate(filter, update);
        console.log(query)

        return res.status(204).send()
    }
}
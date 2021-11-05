const Ad = require("../model/Ad");
const Applicant = require("../model/Applicant");
const User = require("../model/User");

module.exports = {

    async apply(req, res){

       const {
           adsId,
           userId
       } = req.params;

       const ad = await Ad.findOne({ _id: adsId })
       const provider = await User.findOne({ _id: userId })

        const query = await Applicant.create({
            ad,
            provider,
        })

        return res.status(201).send(query)
    },

    async index(req, res){
        const {adsId} = req.params;

        const applicants = await Applicant.find()
        .where('ad').equals(adsId)
        .populate('provider')

        return res.json(applicants)
    }
}
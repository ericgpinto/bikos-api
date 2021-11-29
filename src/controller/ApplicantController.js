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
       const user = await User.findOne({ _id: userId })

       const applicant = await Applicant.create({
        user            
        })

       const applicants = await Ad.updateOne(
           { _id: ad },
           { $push: { 'applicants' : applicant }}
       )
       
        return res.status(201).send()
    }
}
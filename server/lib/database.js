const nullUser = require('../models/nullUser.js');
const utils = require('../utils/utils.js');

async function getUsers(limit) {
    let request = await nullUser.find({})
    let shuffleRequest = utils.shuffleArray(request)
    let limitArrayByLength = utils.takeArray(shuffleRequest, 30)
    let anonymizer = limitArrayByLength.map((item) => {
        let anonymizeUser = item;
        anonymizeUser.username = utils.createRandomName()
        anonymizeUser.profile_pic_url = `https://loremflickr.com/200/200/` //Case on
        return anonymizeUser
    })
    return anonymizer;
}

async function search(query) {
    let request = await nullUser.find({ "full_name": { "$regex": query, "$options": "i" } });
    let shuffleRequest = utils.shuffleArray(request)
    let limitArrayByLength = utils.takeArray(shuffleRequest, 30)
    let anonymizer = limitArrayByLength.map((item) => {
        let anonymizeUser = item;
        anonymizeUser.username = utils.createRandomName()
        anonymizeUser.profile_pic_url = `https://loremflickr.com/200/200/` //Case on
        return anonymizeUser
    })
    return anonymizer;
}

async function giveLike(pk) {
    let request = await nullUser.findOne({ 'pk': pk })
    if (request) {
        let giveLikeInDataBase = await nullUser.updateOne({ 'pk': pk }, { 'likesCount': request.likesCount + 1 || 1 })
        return giveLikeInDataBase;
    } else {
        throw "NotFoundInDataBase"
    }
}

module.exports = { getUsers, giveLike, search }

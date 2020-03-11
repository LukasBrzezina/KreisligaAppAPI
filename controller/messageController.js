const messgeModel = require('../models/messageModel');

const GetAllMessages = (req, res) => {
    messgeModel.GetAllMessages()
    .then( messageData => {
        res.status(200);
        console.log(typeof(JSON.parse(JSON.stringify(messageData))));
        res.JSON(messgeModel);
    });
};

//Module werden exportiert:
module.exports = {
    GetAllMessages
}
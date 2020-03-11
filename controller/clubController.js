const userModel = require('../models/clubModel');

const GetAllClubByLiga = (req, res) => {
    const data = userModel.GetUserById(req.params.id);
    data
    .then( userData => {
        console.log(req.params);
        console.log(typeof(JSON.parse(JSON.stringify(userData))));
        res.JSON(JSON.stringify(userData));
    });
};

//Module werden exportiert:
module.exports ={
    GetAllClubByLiga
}
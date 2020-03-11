const 
    router = require('express').Router();
    userController = require('./controller/userController');
    clubController = require('./controller/clubController');
    messageController = require('./controller/messageController');

//Hier wird Methode empfangen zurückgeben
router.get('/', (req, res) => {
    res.send('Signal empfangen: Geben sie etwas ein');
});

//Für die eingegebene ID werden User Daten zurückgegeben
router.get('/GetUserById/:id', (req,res) => {
    res.send(userController.GetUserById(req,res));
})

//Für die eingegebene ID werden alle Vereine der Liga zurückgegeben
router.get('/GetAllClubByLiga/:id', (req,res) => {
    res.send(clubController.GetAllClubByLiga(req,res));
})

//Alle Nachrichten die geschickt wurden werden angezeigt
router.get('/Messages', (req,res) => {
    res.send(messageController.GetAllMessages(req,res));
})

//Module werden exportiert:
module.exports = router;
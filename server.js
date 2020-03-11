const
    //Framework: React
    express = require('express');

    routing = require('./router');

require('dotenv').config();

const app = express();

//Header "Test" wird zurückgegeben
app.use((req, res, next) => {
    res.header('Test');
    next();
});

//Hier wird zum Routing (router.js) weitergeleitet
app.use('/',routing);

app.listen(process.env.PORT, () => {
    console.log('Port' + process.env.PORT);
})


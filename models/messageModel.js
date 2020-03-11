const dbc = require('./db_connection');

//Funktion holt alle Clubs der folgenden Liga
/*
* Asynchrone Funktionen arbeiten außerhalb des Kontrollflusses
* await Ausdruck wartet auf den zurückgegeben Wert das der await Ausdruck erzeugt, worauf die Funktion ihre Arbeit wieder aufnimmt
*/
const GetAllMessages = async () => {
    let conn;
    try {
        conn = await dbc.pool.getConnection();
        const rows = await conn.query("SELECT * FROM 'tbl_nachrichten' WHERE 1");
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        if(conn)
            conn.end;
    }
};

//Module werden exportiert:
module.exports = {
    GetAllMessages
}
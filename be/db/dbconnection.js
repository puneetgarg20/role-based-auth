const config = require('./dbconfig')
sql = require("mssql");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// let pool;
// const connection = async () => {
//     try {
//         pool = await sql.connect(config);
//         console.log(
//             'database connected'
//         )

//     }
//     catch (err) {
//         console.log(err);
//     }
// }

const getusers = async () => {
    try {
        let pool = await sql.connect(config);


        let users = pool.request().query('SELECT * FROM users');
        console.log(users);
        return users;

    }
    catch (err) {
        console.log(err);
    }


}

const addusers = async (data) => {
    try {
        let pool = await sql.connect(config);
        bcrypt.hash(data.password, saltRounds).then(function (hash) {
            pool.request().query(`INSERT INTO users (Name,Email_Id,Password,Role) VALUES ('${data.name}','${data.email_id.trim()}', '${hash}','user' ) `);
        });




    }
    catch (err) {
        console.log(err);
    }


}

const checkuserlogin = async (data) => {
    try {

        let flag;
        let pool = await sql.connect(config);
        let hash = await pool.request().query(`SELECT Password FROM users WHERE Email_Id='${data.email_id}'`);
        console.log(hash, "----->hash");
        if (hash.recordset.length <= 0) return { auth: false };
        bcrypt.compare(data.password, hash.recordset[0].Password).then(function (result) {
            console.log("------>result", result);
            flag = result;

        });
        return ({ msg: flag });
    }
    catch (err) {
        console.log(err);
        return err;
    }
}


module.exports = {
    checkuserlogin,
    getusers,
    addusers
}
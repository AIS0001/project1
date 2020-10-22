const pool = require("../../config/database");

module.exports = {
    create:(data,callback)=>{
        pool.query(
            `INSERT INTO admin (userid,password,type) 
            VALUES ( ?, ?, ?)`,
        [
            data.userid,
            data.password,
            data.type,
         
        ],
        (error,results,fields)=>{
            if(error)
            {
                return callback(error);
            }
            return callback(null,results);
        }

        );
    },
    getPartyName:(callback)=>{
        pool.query(`SELECT * FROM party`,
        [],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    getUsers:callback=>{
        pool.query(`select * from admin`,
        [

        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },

    getUserByid:(id,callback)=>{
        pool.query(`select * from admin where id=?`,
        [id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },


  
    getUserByuserEmail:(userid,callack)=>{
        pool.query(
            `select * from admin where userid = ?`,
            [userid],
            (error,results,fields)=>{
                if(error)
                {
                    callack(error);
                }
                return callack(null,results[0]);
            }
        );
    }

};
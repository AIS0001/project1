const pool = require("../../config/database");

module.exports = {
    create:(data,callback)=>{
        pool.query(
            `INSERT INTO delivery (type,invoice, datetime, party,qty,amount, gallary,Remark) 
            VALUES ( ?, ?, ?, ?,?, ?, ?, ?)`,
        [
            data.type,
            data.invoice,
            data.datetime,
            data.party,
            data.qty,
            data.amount,
            data.gallary,
            data.Remark
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
    
  

    getUsers:callback=>{
        pool.query(`select * from delivery`,
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
        pool.query(`select * where id=?`,
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

  

};
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

    updateParty:(data,callback)=>{
        pool.query(`UPDATE party SET comp_name = "dsfsdf", cust_name = "piaaa", contact = 554, city = "1dsd", address = "dsdfsdf", pincode = "586786" WHERE id =31`,
        [
          
        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        });
    },
    updateDelivery:(data,callback)=>{
        pool.query(`UPDATE delivery SET type= ?,invoice= ?,party= ?,qty= ?,amount= ?,Remark= ? WHERE id =?`,
        [
            data.type,
            data.invoice,
            data.party,
            data.qty,
            data.amount,
            data.Remark ,
            data.id
        ],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        });
    },
    deleteParty:(data, callback)=>{
        pool.query(`delete from party where id=?`,
        [ data.id],
        (error,results,fields)=>{
            if(error)
            {
              return  callback(error);
            }
            return callback(null,results);
        }
        );
    },
    deleteDelivery:(data, callback)=>{
        pool.query(`delete from delivery where id=?`,
        [ data.id],
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
const { create,getPartyName,updateParty,deleteDelivery,deleteParty, getUserByuserEmail, updateDelivery } = require("./admin.service");
const { genSaltSync,hashSync,compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports ={

   createadmin:(req,res)=>{

    const body =req.body;
    const salt = genSaltSync(10);
   // const empid = body.empcode;
    //console.log(body.password);
   body.password=hashSync(body.password,salt);
      create(body,(err,results)=>{
        if(err)
        {
            console.log(err);
         //    console.log(body);
            return res.status(500).json({
                status:500,
                success:0,
                message:"500 Internal Server Error"
            })
          
        }
        return res.status(200).json({
            // console.log(pool1Amount);
             success:1,
             status:200
         });
    })
},
      //get Party Name
      getParty:(req,res)=>{
        const pname =req.params.partyname;
        getPartyName((err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
                return res.json({
                    success:0,
                    message:"Record not found"
                });
            }
            return res.json({
                success:1,
                data:results 
            });
        });
    },
    
    updateUserDetails:(req,res)=>{
        const body =req.body;
        updateParty(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                status:200,
                success:1,
                data:"Record updates successfully"
            });
        });
    },
    updateDeliveryDetails:(req,res)=>{
        const body =req.body;
        updateDelivery(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                status:200,
                success:1,
                data:"Record updates successfully"
            });
        });
    },

    deletePartyRecord:(req,res)=>{
       // const id = req.param.id;
       const data = req.body;
        deleteParty(data,(err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
                return res.json({
                    status:404,
                    success:0,
                    message:"Record not found"
                });
            }
            return res.json({
                status:200,
                success:1,
                message:"Record deleted successfully"
            })
        });

    },
    deleteDeliveryRecord:(req,res)=>{
        // const id = req.param.id;
        const data = req.body;
         deleteDelivery(data,(err,results)=>{
             if(err)
             {
                 console.log(err);
                 return;
             }
             if(!results)
             {
                 return res.json({
                     status:404,
                     success:0,
                     message:"Record not found"
                 });
             }
             return res.json({
                 status:200,
                 success:1,
                 message:"Record deleted successfully"
             })
         });
 
     },

    login:(req,res)=>{
        const body = req.body;
        getUserByuserEmail(body.userid,(err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
               return res.json({
                success:0,
                data:"Invalid Userid or Password"

               }) ;
          
            }
            const result = compareSync(body.password,results.password);
            if(result)
            {
                results.password=undefined;
                const jwt = sign({result,results},"TXlMb3ZlUHJpeWFua2E",{
                    expiresIn:"1h"
                });
                return res.json({
                    success:1,
                    status:200,
                    message:"logged in successfully",
                    token:jwt
                });
            }
            else{
                return res.jason({
                   
                    success:0,
                    message:"Invalid email or password"
                });

            }
        });
    }


}
const { create,getUsers,getUserByid,updateUser,deleteUser, getUserByuserEmail } = require("./delivery.service");
//const { genSaltSync,hashSync,compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports ={
   
    createdelivery:(req,res)=>{

        const body =req.body;
        console.log("Request ---", req.body);
        console.log("Request file ---", req.files);
       // const salt = genSaltSync(10);
      //  body.password=hashSync(body.password,salt);
     // now here we want to acess the req.files to get the file
     // so to access Image it will be array of ojects in req.files
     // i need to print it in console to see ok?ok
     //console.log(req.files) //now go to post man and add the gallary filed and upload more than image and make request
     // open post
            // Gallary
            let gallary = '';
            req.files['gallary'].forEach(el => {
             gallary += el.filename + ',';
            });
            gallary = gallary.substring(0, gallary.length - 1);
            //End Gallary
        create({
            type: req.body.type,
            invoice: req.body.invoice, 
            datetime: req.body.datetime, 
            party: req.body.party, 
            proof1: req.files['proof1'][0].filename,
            gallary: gallary,
            Remark: req.body.Remark
        },(err,results)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Database connection error "
                });
            }
            return res.status(200).json({
                success:1,
                data:results

            });

        });
    },
    getUserByid:(req,res)=>{
        const id = req.param.id;
        getUserByid(id,(err,results)=>{
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
    getDelivery:(req,res)=>{
        getUsers((err,results)=>{
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
    
    updateUser:(req,res)=>{
        const body =req.body;
        const salt = genSaltSync(10);
       // body.password=hashSync(body.password,salt);
        updateUser(body,(err,results)=>{
            if(err)
            {
               console.log(err);
               return;
            }
            return res.json({
                success:1,
                data:"Record updates successfully"
            });
        });


    },

    deleteUser:(req,res)=>{
       // const id = req.param.id;
       const data = req.body;
        deleteUser(data,(err,results)=>{
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
                message:"Record deleted successfully"
            })
        });

    },

    login:(req,res)=>{
        const body = req.body;
        getUserByuserEmail(body.email,(err,results)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            if(!results)
            {
               return res.json({
                success:0,
                data:"Invalid Email or Password"

               }) ;
          
            }
            const result = compareSync(body.password,results.password);
            if(result)
            {
                results.password=undefined;
                const jwt = sign({result,results},process.env.SECRET_KEY,{
                    expiresIn:"1h"
                });
                return res.json({
                    success:1,
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
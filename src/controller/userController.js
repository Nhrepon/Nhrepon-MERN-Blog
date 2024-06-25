const userModel=require('../model/userModel');


// User registration
exports.userRegistration=async (req, res)=>{
    try {
        const reqBody=req.body;

        const data= await userModel.create(reqBody);
        res.json({status:"success", data:data});
    }catch (error) {
        res.json({status:"failed", message:error});
    }
}


// User login
exports.userLogin=async (req, res)=>{
    try {

        const data=
        res.json({status:"success", data:data});
    }catch (error) {
        res.json({status:"failed", message:error});
    }
}



// User profile read
exports.userProfileRead=async (req, res)=>{
    try {

        const data=
            res.json({status:"success", data:data});
    }catch (error) {
        res.json({status:"failed", message:error});
    }
}



// User profile update
exports.userProfileUpdate=async (req, res)=>{
    try {

        const data=
            res.json({status:"success", data:data});
    }catch (error) {
        res.json({status:"failed", message:error});
    }
}




// User profile delete
exports.userProfileDelete=async (req, res)=>{
    try {

        const data=
            res.json({status:"success", data:data});
    }catch (error) {
        res.json({status:"failed", message:error});
    }
}
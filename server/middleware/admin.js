let admin = (req,res,next)=>{
    if(req.user.role === 0){
        res.send("you are not allowed, Kindly get out");
    }
    next();
}

module.exports = { admin }
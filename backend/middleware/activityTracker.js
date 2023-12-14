const fs=require("fs")

const activityTracker=(req,res,next)=>{
    fs.appendFileSync("./logs.txt",`Route: ${req.url} | METHOD: ${req.method} | Time: ${Date()}\n`);
    next();
}

module.exports={activityTracker}
const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    name:{
        type:String,
        reuired:true
    },
    age:{
        type:Number,
        reuired:true
    },
    email:{
        type:String,
        reuired:true
    },
    phone:{
      type:Number,
      required:true
    },
    address:{
        type:String,
        required:true
    },
    favoriteFruit: {
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("Posts", PostSchema);


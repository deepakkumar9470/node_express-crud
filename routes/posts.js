const express = require("express");

const router = express.Router();
// Importing Model
const Post = require("../models/Post");



// GET
router.get("/", async (req,res)=>{
    try{
      const getPost = await Post.find();
      res.json(getPost);
    }catch(err){
        res.json({message:err});
    }
})

// POST (CREATE)
router.post("/", async (req,res)=>{
    const post = new Post({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        favoriteFruit: req.body.favoriteFruit
    });
   try {
    const savedPost = await post.save();
    res.json(savedPost);
    
   }catch(err){
       res.json({message:err});
   }
})
// GET Specific Post
router.get("/:postId" , async (req, res)=>{
  try{
    const getSpecificPost = await Post.findById(req.params.postId);
    res.json(getSpecificPost);
  }catch(err){
      res.json({message: err});
  }
})

// DELETE 
router.delete("/:postId", async (req, res)=>{
   try{
    const deletePost = await Post.deleteOne({_id:req.params.postId});
    res.json(deletePost);
   }catch(err){
       req.json({message : err});
   }
})
 
// UPDATE

router.patch("/:postId", async (req, res)=>{
   try{
       const updatePost = await Post.updateOne({_id: req.params.postId}, 
        {$set: {name:req.body.name, age:req.body.age,address:req.body.address}})
       res.json(updatePost);
   }catch(err){
       req.json({message : err});
   }
})

module.exports = router
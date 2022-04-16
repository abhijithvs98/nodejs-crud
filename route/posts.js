const express = require("express");
const router = express.Router();
const Post = require("../model/Post");

router.get("/", async (req,res)=>{

    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({
            "errorMessage" : err
        });
    }

    ///res.send("POSTS");
});

router.get("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post); 
    }catch(err){
        res.json({
            "errorMessage" : err
        });
    }
});

router.delete("/:id", async (req,res) => {
    try{
        const deletedPost = await Post.remove({_id : req.params.id});
        res.json({"message": "deleted success",
                  "deletedPost" : deletedPost
                }); 
    }catch(err){
        res.json({
            "errorMessage" : err
        });
    }
});

router.patch("/:id", async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id : req.params.id},
            { $set : {title: req.body.title,
                       description: req.body.description
                         } }
                );
                res.json(updatedPost);
    }catch(err){
        console.log(err)
        res.json({
            "errorMessage" : err
        });
    }
})

router.post("/", async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description 
    });
 
    //METHOD 1 (without async and await)
    // post.save()
    // .then(data => res.json(data))
    // .catch(err => res.json({
    //     "code": 400,
    //     "userMessage": "Data not inserted",
    //     "errorMessage" : err
    // }));

    //METHOD 2

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({
                "errorMessage" : err
            });
    }
    

});

module.exports = router;
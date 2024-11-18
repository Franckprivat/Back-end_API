const express = require('express');
const { setPosts, getPosts, editsPost, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:id", editsPost);

router.delete("/:id", deletePost);

router.patch("/like-post/:id", likePost); 

router.patch("/dislike-post/:id", dislikePost);

module.exports = router;



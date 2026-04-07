//my get.controller
import {Post} from "../models/post.model.js";

const getPosts=async(req,res)=>
{
    try
    {
      const getPosts = await Post.find();
      res.status(200).json(getPosts);
    }
    catch(error)
    {
        res.status(500).json({message:"INTERNAL SERVER ERROR",error});
    }
}

export
{
    getPosts
}
import {Post} from "../models/post.model.js"

// create a post
const createPost = async(req,res)=>
{

    try
    {

     const{name,description,age}=req.body;

    if(!name|| !age|| !description)
    {
        return res.status(400).json({message:"ALL DETAILS ARE REQUIRED"});
    }
    const post = await Post.create({name,age,description})

    return res.status(201).json({message:"POST CREATED SUCCESSFULLY",post});
    }
    catch(error)
    {
        res.status(500).json({message:"INTERNAL SERVER ERROR",error});
    }    
}

const updatePost = async(req,res)=>
{
    try
    {
        if(Object.keys(req.body).length===0)
        {
             return res.status(400).json({message:"NO DATA PROVIDED TO BE UPDATED"});
        }

        const post= await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!post)
        {
            res.status(404).json({message:"POST NOT FOUND"});
        }
        res.status(200).json({message:"Post Updated Successfully",post})
    }
    catch(error)
    {
        res.status(500).json({message:"INTERNAL SERVER ERROR",error});
    }
    
}

export const deletePost = async(req,res)=>
{
    try
    {
        const deleted= await Post.findByIdAndDelete(req.params.id);

        if(!deleted)
        {
            return res.status(404).json({message:"POST NOT FOUND"});
        }

        res.status(200).json({message:"POST DELETED SUCCESSFULLY"});

    }
    catch(error)
    {
       res.status(500).json({message:"INTERNAL SERVER ERROR",error});
    }
}
export
{
    createPost,
    updatePost,
    //deletePost
}
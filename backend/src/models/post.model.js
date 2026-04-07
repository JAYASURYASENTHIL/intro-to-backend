import mongoose,{Schema} from "mongoose"

const postSchema= new Schema(
    {
      name:
      {
        type:String,
        required:true,
        minLength:1,
        trim:true,
        maxLength:30
      },
      description:
      {
        type:String,
        required:true,
        minLength:1,
        trim:true,
        maxLength:300
    },
     age:
     {
        type:Number,
        min:1,
        max:130,
        required:true

     }
    },
    {
        timestamps:true
    }
)
export const Post=mongoose.model('Post',postSchema)
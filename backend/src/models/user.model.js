// this is my MODEL
import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            minLength:1,
            maxLength:30
        },
        password:
        {
            type:String,
            required:true,
            trim:true,
            minLength:5,
            maxLength:20
        },
        email:
        {
            type:String,
            required:true,
            trim:true,
            minLength:5,
            maxLength:29
        }
    },
        {
            timestamps:true
        }

)
// before saving password hash it

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);

});
// COMPARE PASSWORD
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User",userSchema)
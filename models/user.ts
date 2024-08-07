import { Schema, model, models } from "mongoose";


const UserSchema= new Schema({
email:{
    type:String,
    unique:[true,'Email already exists'],
    require:[true,'Email is required'],
},

username:{
    type:String,
    unique:[true,'Username is required'],
    
},
image:{
    type:String,
    default:"",
},
});
const User=models.User || model('User',UserSchema);

export default User;

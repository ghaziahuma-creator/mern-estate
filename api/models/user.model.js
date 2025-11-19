import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    require: true,
    unique: true,
  },
  email:{
    type: String,
    require: true,
    unique: true,
  },
  password:{
    type: String,
    require: true,
  },
  avatar:{
    type: String,
    default:"https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=0&uuid=5dcf06a8-ad90-449e-a48a-880a84ae7b2e&query=Profile+logo"
  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
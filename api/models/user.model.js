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
    default:"https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w="
  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
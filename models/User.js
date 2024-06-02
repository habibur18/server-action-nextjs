import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 30,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.models.User || mongoose.model("User", UsersSchema);

export default User;

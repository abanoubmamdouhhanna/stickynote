import { ObjectId } from "bson";
import { Schema, Types, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    age: Number,
    gender: {
      type: String,
      required: false,
      default: "Male",
      enumL: ["Male", "Female"],
    },
    // notesId: {
    //   type: Types.ObjectId,
    //   ref: "Note",
    // },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);
export default userModel;

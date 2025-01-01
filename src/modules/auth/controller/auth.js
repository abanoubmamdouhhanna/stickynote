import userModel from "../../../../DB/models/User.model.js";
import { generateToken } from "../../../utils/generate&verifyToken.js";
import { compare, hash } from "../../../utils/hash&compare.js";

export const signup = async (req, res, next) => {
  try {
    const { userName, email, password, age } = req.body;
    const checkUser = await userModel.findOne({ email });
    if (checkUser) {
      return res.json({ message: "Email exist" });
    }
    const hashPassword = hash({ plainText: password });
    const user = await userModel.create({
      userName,
      email,
      password: hashPassword,
      age,
    });
    return res.json({ message: "User created successfully", user });
  } catch (error) {
    if (error.code == 11000) {
      return res.json({ message: "Email exist" });
    }
    return res.json({ message: "Catch error", error, stack: error.stack });
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ message: "user not found" });
    }
    const match = compare({ plainText: password, hashValue: user.password });
    if (!match) {
      return res.json({ message: "wrong password" });
    }

    const token = generateToken({
      payload: { id: user._id, isLoggedIn: true },
      signature: process.env.signature,
      expiresIn:  60 * 60,
    });
    return res.json({ message: "loggedin successfully", token });
  } catch (error) {
    return res.json({ message: "Catch error", error, stack: error.stack });
  }
};

import jwt from "jsonwebtoken";
import userModel from "../../DB/models/User.model.js";

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.json({ message: "Authorization is required" });
  }
  if (!authorization.startsWith(process.env.BEARER_KEY)) {
    return res.json({ message: "In-valid authorization" });
  }
  const token = authorization.split(process.env.BEARER_KEY)[1];
  if (!token) {
    return res.json({ message: "Token is required" });
  }
  const decoded = jwt.verify(token, process.env.signature);
  if (!decoded?.id || !decoded?.isLoggedIn) {
    return res.json({ message: "In-valid token payload" });
  }
  const authUser = await userModel
    .findById(decoded.id)
    .select("userName email");
  if (!authUser) {
    return res.json({ message: "User not found" });
  }
  req.user = authUser;
  return next();
};
export default auth;

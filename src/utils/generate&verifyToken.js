import jwt from "jsonwebtoken";
export const generateToken = ({
  payload = {},
  signature = process.env.signature,
  expiresIn = 60 * 60,
} = {}) => {
  const token = jwt.sign(payload, signature, { expiresIn });
  return token;
};

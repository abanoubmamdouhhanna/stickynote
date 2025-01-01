import noteModel from "../../../../DB/models/Note.model.js";
import userModel from "../../../../DB/models/User.model.js";

export const getNotes = async (req, res, next) => {
  try {
    const getNotes = await noteModel.find().populate({path:'userId',select:"userName email"});
    return getNotes
      ? res.json({ message: "All notes", getNotes })
      : res.json({ message: "Ther is no notes" });
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};
export const createtNote = async (req, res, next) => {
  try {
    const { title, description, userId } = req.body;
    const checkUser = await userModel.findById(userId);
    if (!checkUser) {
      return res.json({ message: "Invalid User" });
    } else {
      const createtNote = await noteModel.create({
        title,
        description,
        userId,
      });
      return res.json({ message: "Done", createtNote });
    }
  } catch (error) {
    return res.json({ message: "Catch Error", error, stack: error.stack });
  }
};

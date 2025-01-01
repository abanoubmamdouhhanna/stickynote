import noteModel from "../../../../DB/models/Note.model.js";
import userModel from "../../../../DB/models/User.model.js";

export const users = async (req, res, next) => {
  const users = await userModel.find();
  return res.json({ message: "All users", users });
};
export const profile = async (req, res, next) => {
  try {
    const users = await userModel.findById(req.user._id);
    const notes = await noteModel.find({ userId: req.user.id });

    return res.json({ message: "User Profile", data: { users, notes } });
  } catch (error) {
    res.json({ message: "invalid user", error, stack: error.stack });
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return update
      ? res.json({ message: "updated successfully", update })
      : res.json({ message: "invalid user" });
  } catch (error) {
    res.json({ message: "invalid user", error, stack: error.stack });
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModel.findByIdAndDelete(id);
    return deleteUser
      ? res.json({ message: "delted successfully", deleteUser })
      : res.json({ message: "invalid user" });
  } catch (error) {
    res.json({ message: "invalid user", error, stack: error.stack });
  }
};

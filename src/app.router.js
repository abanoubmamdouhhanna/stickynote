import connectDB from "../DB/connection.js";
import userRouter from "../src/modules/users/user.router.js";
import authRouter from "../src/modules/auth/auth.router.js"
import noteRouter from '../src/modules/notes/note.router.js'
const initApp = (app, express) => {
  app.use(express.json({}));

  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/notes", noteRouter);

  app.use("*", (req, res) => {
    return res.json({ message: "Error 404 page not found" });
  });
};
connectDB();
export default initApp;

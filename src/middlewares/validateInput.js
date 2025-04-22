import throwIf from "../utils/throwIf.js";

export const validateAllInput = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ msg: "All Fields are required" });
  next();
};
export const validateUpdateInput = async (req, res, next) => {
  const { username, email } = req.body;
  if (!username || !email)
    return res.status(400).json({ msg: "All Fields are required" });
  next();
};

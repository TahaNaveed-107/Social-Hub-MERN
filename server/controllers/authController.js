import jwt from "jsonwebtoken";
export const verifyUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(404).json({
      message: "No Token Found",
    });
  }

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return res.status(200).json({
      message: "User Is Verified",
      user: verifiedUser,
    });
  } catch (error) {
    return res.status(403).json({
      message: "Token seems to be Expired",
    });
  }
};
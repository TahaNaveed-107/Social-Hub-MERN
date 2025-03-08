import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  // check for token in cookies
  let token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    req.user = decoded;
    next();
  });
};

export default authenticateToken;

import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Corrected spelling

  if (!token) {
    return res.status(401).json({ message: "No token was found" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    // Fixed from sign to verify
    if (err) {
      return res.status(403).json({ message: "Token is not valid" });
    }
    console.log("Decoded User:", decoded); // Debugging
    req.user = decoded;
    next();
  });
};

export default authenticateToken;

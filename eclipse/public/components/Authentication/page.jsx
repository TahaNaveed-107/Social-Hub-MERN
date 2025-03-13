export default function Authenticate({ children }) {

  const verifyUser = async (req, res) => {
    try {
        res = await fetch ("http://localhost:4004/user/verify", {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
        credentials: "include",
      })

      console.log("Response: ", res);
    } catch (error) {
      console.log({
        message : error,
        error: error.message,
      })
    }
  }

  verifyUser();
  return <>{children}</>;
}

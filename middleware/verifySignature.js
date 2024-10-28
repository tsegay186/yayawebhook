import sign from "../helpers/signPayload.js";

const verifySignature = (req, res, next) => {
    const recievedSignature = req.headers["YAYA-SIGNATURE"];
    const calculatedSignature = sign(req.body) 
    if (recievedSignature !== calculatedSignature) {
      return res.status(401).send("Invalid signature");
    }
    next();
  };

  export default verifySignature
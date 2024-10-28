import signPayload from "./signPayload.js";
const signRequest = (req,res, next) => {
    const signature = signPayload(req.body)
    req.headers['YAYA-SIGNATURE'] = signature;
    next();
  }
  export default signRequest
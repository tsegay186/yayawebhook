const signRequest = (req,res, next) => {
    const signature = sign(req.body)
    req.headers['YAYA-SIGNATURE'] = signature;
    next();
  }
  export default signRequest
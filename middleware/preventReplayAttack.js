const preventReplayAttack = (req, res, next)=>{
    const tolerance = 30000000 // in milliseconds (5 minute)
    const requestTimeStamp= req.body.timestamp * 1000 ; // in milliseconds
    const currentimestamp = Date.now() ;  // in milliseconds
    const timestampDiff = currentimestamp - requestTimeStamp
      if (timestampDiff > tolerance) {
        return res.status(400).json({ error: 'Timestamp expired' });
      }
  
      next()
  }
  
  export default preventReplayAttack
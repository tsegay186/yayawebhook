import crypto from 'crypto'
const SECRET_KEY = process.env.SECRET_KEY || "key";
const signPayload = (payload)=> {
    const hmac = crypto.createHmac("sha256", SECRET_KEY);
    const signedPayload = Object.values(payload).join("");
    const encodedPayload = Buffer.from(signedPayload, 'utf-8');
    const result = hmac.update(encodedPayload).digest('base64');
    return result
  }

  export default signPayload
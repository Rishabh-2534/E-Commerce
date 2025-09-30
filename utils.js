import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export const hash=(data,salt)=>{
  return bcrypt.hash(data, salt);
}  
export const hashCompare=(data1,data2)=>{
    return  bcrypt.compare(data1, data2);
}
// SMTP transport (example: Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER.trim(),
    pass: process.env.SMTP_PASS.trim(),
  },
});

export const sendEmail =async(from,to,subject,html)=>{
    await transporter.sendMail({
        from:from,
        to:to,
        subject:subject,
        html:html
    })
}

export const createJwtToken = (payload,expiresIn)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{ expiresIn: expiresIn} );
  
}

export const verifyJwtToken= (token,salt)=>{
    return jwt.verify(token,salt);
}
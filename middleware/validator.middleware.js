import { body ,param,validationResult} from "express-validator";
import mongoose from "mongodb";
const emailValidate= body("email").isEmail().withMessage("valid email required");

export const registerValidator = [
  emailValidate,
  body("password").isLength({ min: 8,max:100 }).withMessage("Password must be at least 8 chars"),
  body("role").isIn(["buyer", "seller"]).withMessage("Invalid role not eligible"),
  body("bankName")
    .if(body("role").equals("seller"))
    .notEmpty()
    .withMessage("Bank name is required for sellers"),

  body("ifscCode").if(body("role").equals("seller")).matches(/^[A-Z]{4}0[A-Z0-9]{6}$/),
  body("address")
    .if(body("role").isIn(["buyer","seller"])) 
    .isLength({ max: 300})
    .withMessage("address too long"),

  body("contact").optional().isMobilePhone("en-IN").withMessage("Phone must be a valid Indian number")
];

export const loginValidator = [
  emailValidate,
  body("password").notEmpty().withMessage("Password required"),
];

export const passwordChangeValidator = [
  emailValidate,
  body("newPassword").isLength({ min: 8 ,max:100}).withMessage("Password too short or long"),
];
export const productDetailValidator=[
  body("verified").optional().equals(true).withMessage("you verify product yourself"),
  body("price").notEmpty().withMessage("required price"),
  body("categoryId").notEmpty().custom((value)=>mongoose.TopologyDescription.ObjectId.isValid(value))
  .withMessage("either no category or not valid categoryId"),
]

export const IdValidator=(idname)=>{
  return [
  param(idname)
  .custom((value)=>mongoose.Types.ObjectId.isValid(value))
  .withMessage("invalid item objectId not an object id"),
]}

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.error({errors:errors.array()},400);
  }
  next();
};

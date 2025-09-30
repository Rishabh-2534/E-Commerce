import { body } from "express-validator";

export const registerValidator = [
  body("email").isEmail().withMessage("Valid email required"),

  body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 chars"),

  body("role").isIn(["buyer", "seller"]).withMessage("Invalid role not eligible"),
  body("bankName")
    .if(body("role").equals("seller"))
    .notEmpty()
    .withMessage("Bank name is required for sellers"),

  body("ifscCode").if(body("role").equals("seller")).matches(/^[A-Z]{4}0[A-Z0-9]{6}$/),
  body("address")
    .if(body("role").isIn(["buyer","seller"])) 
    .isLength({ max: 50 })
    .withMessage("address too long"),
    
  body("contact").optional().isMobilePhone("en-IN").withMessage("Phone must be a valid Indian number")
];

export const loginValidator = [
  body("email").isEmail().withMessage("Valid email required"),
  body("password").notEmpty().withMessage("Password required"),
];

export const passwordChangeValidator = [
  body("email").isEmail().withMessage("Valid email required"),
  body("newPassword").isLength({ min: 8 }).withMessage("Password too short"),
];

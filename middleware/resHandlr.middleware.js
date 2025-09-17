
export const responseHandler = (req, res, next) => {
  
  res.success = (data = null, message = "Success", status = 200) => {
    res.status(status).json({
      success: true,
      message,
      data,
    });
  };

  
  res.error = (err, status = 500) => {
    res.status(status).json({
      success: false,
      message: err.message ,
      error:err
    });
  };

  next();
};


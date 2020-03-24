var express = require("express");
var router = express.Router();

router.get("/:status?/:message?", function(req, res, next) {
  const errorStatus =
    !!req.params && !!req.params.status ? req.params.status : 500;
  const errorMessage =
    !!req.params && !!req.params.message
      ? req.params.message
      : "Generic Server Error";
  const error = {
    message: errorMessage
  };
  res.status(errorStatus).json(error);
});

router.post("/:status?/:message?", function(req, res, next) {
  const errorStatus =
    !!req.params && !!req.params.status ? req.params.status : 500;
  const errorMessage =
    !!req.params && !!req.params.message
      ? req.params.message
      : "Generic Server Error";
  const error = {
    message: errorMessage
  };
  res.status(errorStatus).json(error);
});

router.put("/:status?/:message?", function(req, res, next) {
  const errorStatus =
    !!req.params && !!req.params.status ? req.params.status : 500;
  const errorMessage =
    !!req.params && !!req.params.message
      ? req.params.message
      : "Generic Server Error";
  const error = {
    message: errorMessage
  };
  res.status(errorStatus).json(error);
});

router.patch("/:status?/:message?", function(req, res, next) {
  const errorStatus =
    !!req.params && !!req.params.status ? req.params.status : 500;
  const errorMessage =
    !!req.params && !!req.params.message
      ? req.params.message
      : "Generic Server Error";
  const error = {
    message: errorMessage
  };
  res.status(errorStatus).json(error);
});

router.delete("/:status?/:message?", function(req, res, next) {
  const errorStatus =
    !!req.params && !!req.params.status ? req.params.status : 500;
  const errorMessage =
    !!req.params && !!req.params.message
      ? req.params.message
      : "Generic Server Error";
  const error = {
    message: errorMessage
  };
  res.status(errorStatus).json(error);
});

module.exports = router;

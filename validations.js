const e = require("express");

const validateRequest = (req, res, next) => {
  let { name, description, image } = req.body;

  //   name key check
  if (!name || typeof name !== "string") {
    res
      .status(422)
      .json({ Error: "name key is required and must be a string" });
  }

  req.body.name = nameConversion(name)

  //    description check
  if (description && typeof description !== "string") {
    return res
      .status(422)
      .json({ Error: "description value must be a string" });
  }

  //   image check
  if (!image) {
    image = "https://";
  }
  validateUrl(image, res);

  //   numeric keys check
  const numArr = ["fiber", "protein", "added_sugar", "carbs"];

  numArr.forEach((el) => {
    if (!req.body[el]) {
      req.body[el] = 0;
    }
  });

  for (const key in req.body) {
    if (numArr.includes(key)) {
      if (typeof Number(req.body[key]) !== "number") {
        return res.status(422).json({
          Error: `invalid input, ${key} datatype needs be a number`,
        });
      }
    }
  }

  next();
};

const confirmHealth = (req, res, next) => {
  const { added_sugar, protein, fiber } = req.body;

  if (added_sugar > 5 || (protein < 5 && fiber < 5)) {
    req.body.is_healthy = false;
  } else {
    req.body.is_healthy = true;
  }

  next();
};

const validateUrl = (value, res) => {
  const urlStart = value.slice(0, 7);
  const urlStarts = value.slice(0, 8);

  if (urlStart !== "http://" && urlStarts !== "https://") {
    res
      .status(400)
      .json({ Error: "image url must begin with 'http://' or 'https://' " });
  }
};

const nameConversion = (string) => {
  if (string.length < 2) {
    return string;
  }
  
 return string.toLowerCase().split(` `).map((el) => `${el.charAt(0).toUpperCase()}${el.slice(1)}`).join(` `);
   
};

module.exports = {
  validateRequest,
  confirmHealth,
};

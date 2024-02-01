const { typeServices } = require("../services");

const getAllTypes = (req, res) => {
  try {
    const response = typeServices.getTypesInDB();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllTypes };

const { typesServices } = require("../services");

const getAllTypes = async (req, res) => {
  try {
    const response = await typesServices.getTypes();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllTypes };

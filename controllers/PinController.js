const PinModel = require('../models/Pin');

class PinController {
  create = async (req, res) => {
    const newPin = new PinModel(req.body);
    try {
      const savedPin = await newPin.save();
      res.status(200).json(savedPin);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  getPins = async (req, res) => {
    try {
      const pins = await PinModel.find();
      res.status(200).json(pins);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new PinController();
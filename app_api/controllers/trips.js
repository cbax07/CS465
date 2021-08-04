const mongoose = require('mongoose');
const model = mongoose.model('trips');

//Get: /trips - Lists all the trips in the DB
const tripsList = async (req, res) => {
    model
        .find({})  // Empty filter for all
        .exec((err, trips) => {
            if (!trips) {
                return res  // Return a response with 404 code and message
                    .status(404)
                    .json({"message": "Trips not found"});
            } else if (err) { // If error, convert to json and return to user
                return res
                    .status(404)
                    .json(err);
            } else {  // Success
                return res
                    .status(200)
                    .json(trips);
                }
        });
};

//Get: /trips/:tripCode - Returns a single trip
const tripsFindCode = async (req, res) => {
    model
        .find({ 'code': req.params.tripCode })  // Empty filter for all
        .exec((err, trip) => {
            if (!trip) {
                return res  // Return a response with 404 code and message
                    .status(404)
                    .json({"message": "Trip not found"});
            } else if (err) { // If error, convert to json and return to user
                return res
                    .status(404)
                    .json(err);
            } else {  // Success
                return res
                    .status(200)
                    .json(trip);
                }
        });
};

const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if (err) {
                return res
                    .status(400)  // bad request
                    .json(err);
            } else {
                return res
                    .status(201)  // created
                    .json(trip);
            }
        });
}

const tripsUpdateTrip = async (req, res) => {
  console.log(req.body);
  model
    .findOneAndUpdate(
      { 'code': req.params.tripCode }, {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      }, { new: true })
    .then(trip => {
      if (!trip) {
        return res.status(404).send({
          message: "Trip not found with code " + req.params.tripCode});
      }
      res.send(trip);
    }).catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Trip not found with code " + req.params.tripCode});
      }
      return res
        .status(500) // server error
        .json(err);
    });
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip
};
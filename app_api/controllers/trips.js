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

module.exports = {
    tripsList,
    tripsFindCode
};
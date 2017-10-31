'use strict';

const Mongoose = require('mongoose');
const config = require('../../config');

const DoctorSchema = new Mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String },
    picture: { type: String, default: config.LOGIN.DEFAULT_DOCTOR_PICTURE },
    loginId: { type: Mongoose.Schema.Types.ObjectId, required: true, index: { unique: true } },
    appointments: [{ userId: { type: Mongoose.Schema.Types.ObjectId }, appointment: { type: String } }],
    reviews: [{ userId: { type: Mongoose.Schema.Types.ObjectId }, review: { type: String } }],
    ratings: [{ userId: { type: Mongoose.Schema.Types.ObjectId }, rating: { type: Number } }]
});

const doctorModel = Mongoose.model('doctors', DoctorSchema);

module.exports = doctorModel;


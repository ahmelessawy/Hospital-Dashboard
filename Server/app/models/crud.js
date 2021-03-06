'use strict';

var model = require('../database').Models.Login;

const create = (data, callback) => { new model(data).save(callback) }

const find = (data, callback) => { model.find(data, callback) }

const findOne = (data, callback) => { model.findOne(data, callback) }

const findById = (id, callback) => { model.findById(id, callback) }

const updateById = (id, newData, callback) => {
	findById(id, (err, data) => {
		if (err) throw err;
		for (var i = 0, keys = Object.keys(newData); i < keys.length; ++i)
			if (data._doc[keys[i]] && newData[keys[i]])
				data[keys[i]] = newData[keys[i]];
		data.save(callback);
	})
}

const removeById = (id, callback) => {
	findById(id, (err, data) => {
		if (err) throw err;
		model.remove(data, callback);
	})
}

module.exports = {
	create,
	find,
	findOne,
	findById,
	updateById,
	removeById
};
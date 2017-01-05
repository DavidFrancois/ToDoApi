var _ = require('lodash');

// Will be use to normalise data sent to renderers and transformers callback
// var configs = require('./../configs');

module.exports.get = function (Model) {
    return function (req, res, next) {
        Model.find(function(err, model) {
            // used when transformers and renderes will be set
            // var response = { err: err, data: model };
            // _.set(req, [configs.server.name, 'response'].join('.'), response);
            // return next();
            if (err) throw err;
            res.status(200).send(model);
        });
    }
}

module.exports.create = function (Model) {}

module.exports.update = function (Model) {
    return function (req, res, next) {
        //update query
    }
}

module.exports.delete = function (Model) {
    return function (req, res, next) {
        //delete query
    }
}

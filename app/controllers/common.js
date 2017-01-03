var _ = require('lodash');

var configs = require('./../configs');

module.exports.get = function (Model) {
    return function (req, res, next) {
        Model.find(function(err, model) {
            var response = { err: err, data: model };
            _.set(req, [configs.server.name, 'response'].join('.'), response);
            return next();
        });
    }
}

module.exports.create = function (Model) {
    return function (req, res, next) {
        Model.create(req.body, function(err, model) {
            var response = { err: err, data: model };
            _.set(req, [configs.server.name, 'response'].join('.'), response);
            return next();
        })
    }
}

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

'use strict';
var dataProvider = require('../../data/student/{id}.js');
var data = require('../../data/student/info.js');
/**
 * Operations on /student/{id}
 */
module.exports = {
    /**
     * summary: get information about a student
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getStudent(req, res, next) {
        let docResult = data.student.find(record => record.id == req.params.id);
        console.log(docResult);
        if (docResult) {
          res.send(docResult);
        } else {
          res.status(405).send({
            "status": 405,
            "type": "validation error",
            "message": "id not found"
          });
        }
    }
};

'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getStudent
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/student/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/student/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};

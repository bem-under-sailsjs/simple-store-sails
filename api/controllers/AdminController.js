/**
 * AdminController
 *
 * @description :: Server-side logic for managing indexpages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `AdminController.index()`
     */
    index: function(req, res, next) {
        res.render({
            data: {
                title: 'Admin'
            }
        });
    },

    settings: function(req, res, next) {

    }
};

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

    },

    showSettings: function(req, res, next) {
        var _this = this;

        Settings.find(function(err, settings) {
            if (err) next(err);

            // First start
            if (!settings || settings.length === 0) {
                _this.createDefaultSetting(function(currentSettings) {

                    res.render({
                        data: {
                            settings: currentSettings,
                            flashID: 'updateSettings'
                        }
                    });

                });

            } else {

                res.render({
                    data: {
                        settings: settings[0],
                        flashID: 'updateSettings'
                    }
                });
            }
        });

    },

    createDefaultSetting: function(callback) {

        Settings.create({}, function(err, settings) {
            if (err) callback(err);

            callback(settings);

        });
    },

    updateSettings: function(req, res, next) {

        Settings.update(req.param('id'), req.params.all(), function(err, settings) {
            if (err) next(err);

            req.flash('updateSettings', 'Настройки сохранены успешно');
            res.redirect('/admin/settings/');
        });
    }
};

/**
 * Settings.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        siteTitle: {
            type: 'string',
            defaultsTo: 'Название магазина'
        },

        managerEmail: {
            type: 'string',
            defaultsTo: 'e-mail Менеджера'
        },
        managerName: {
            type: 'string',
            defaultsTo: 'имя Менеджера'
        }
    },

    toJSON: function() {
        var obj = this.toObject();
        delete obj._csrf;

        return obj;
    },

    beforeValidate: function(values, next) {
        // don't save _csrf token in database
        if (values._csrf) delete values._csrf;
        next();
    },

};

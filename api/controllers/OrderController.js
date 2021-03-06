/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `OrderController.create()`
     */
    create: function(req, res, next) {
        Order.create(req.params.all(), function(err, order) {
            if (err) next(err);

            // Mail to manager and customer
            emailService.sendEmail({order: order}, function(err) {
                // TODO: set flash with err
                if (err) next(err);

                // TODO: clear Cart and set 'proceed' status to order

                res.redirect('/order/' + order.id);
            });
        });
    },

    /**
     * `OrderController.show()`
     */
    show: function(req, res, next) {
        Order.findOne(req.param('id'), function(err, order) {
            if (err) next(err);

            res.render({data: {order: order}});
        });
    }
};


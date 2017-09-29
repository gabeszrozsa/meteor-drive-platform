RouterController = RouteController.extend({
    layoutTemplate: 'main',
    onBeforeAction: function() {
      this.next();
    }
});

Router.configure({
    controller: 'RouterController'
});

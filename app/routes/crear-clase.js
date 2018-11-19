import Route from '@ember/routing/route';

export default Route.extend({
  resetController: function(controller) {
    controller.setProperties({
      className: null,
      description: null,
      objectives: null,
      message: null,
      transition: null
    });
  }
});

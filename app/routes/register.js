import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel: function() {
    if (this.get('session').isOpen()) {
      this.transitionTo('dashboard');
    }
  },

  resetController: function(controller) {
    controller.setProperties({
      email: null,
      emailConfirmation: null,
      password: null,
      message: null,
      transition: null
    });
  }
});

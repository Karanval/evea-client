import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    logout: function() {
      this.get('session').close();
      this.transitionTo('index');
    },
    error: function(error, transition) {
      if (error.status === 'Unauthorized') {
        this._handleError(error, transition, 'login');
      } else if (error.status === 'Forbidden') {
        this._handleError(error, transition, 'forbidden');
      } else {
        // Allow other error to bubble
        return true;
      }
    },
  },

  _handleError: function(error, transition, routeName) {
    var controller = this.controllerFor(routeName);

    controller.setProperties({
      message: error.message,
      transition: transition
    });

    this.transitionTo(routeName);
  }
});

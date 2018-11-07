import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  userService: service('user'),
  session: service(),

  actions: {
    login: function() {
      var email = this.get('email');
      var password = this.get('password');

      var payload = {
        email: email,
        password: password
      };

      this.send('loading');

      return this.get('userService').login(payload)
        .then((user) => {
          return this.get('session').open(user);
        })
        .then(() => {
          var transition = this.get('transition');

          if (transition) {
            transition.retry();
          } else {
            this.transitionToRoute('dashboard');
          }
        })
        .catch((error) => {
          if (error.responseJSON) {
            this.set('message', error.responseJSON.message);
          }
        }).finally(() => {
          this.send('finished');
        });
    }
  }

});

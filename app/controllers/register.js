import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  userService: service('user'),
  session: service(),

  actions: {
    register: function() {

      var name = this.get('name');
      var email = this.get('email');
      var password = this.get('password');

      var payload = {
        name: name,
        email: email,
        password: password
      };

      this.get('userService').register(payload)
        .then(() => {
          return this.get('userService').login(payload);
        })
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
            let message = error.responseJSON.message.replace('caused by Error: ', '');
            this.set('message', message);
          }
        }).finally(() => {
          this.send('finished');
        });
    }
  }
});

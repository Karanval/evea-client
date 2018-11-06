import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  session: service(),

  isLoginPage: computed('currentPath', function() {
    return this.get('currentPath') == 'login';
  }),

  isRegisterPage: computed('currentPath', function() {
    return this.get('currentPath') == 'register';
  }),

  isAdmin: computed('session.info.roles', function() {
    let roles = this.get('session.info.roles') || [];

    return roles.find((role) => {
      return role === 'admin';
    });
  })
});

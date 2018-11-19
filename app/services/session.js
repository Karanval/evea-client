import Service from '@ember/service';
import {
  inject as service
} from '@ember/service';

export default Service.extend({
  userService: service('user'),

  init: function() {
    this._super(...arguments);
  },

  open: function(user) {
    localStorage.setItem('user', JSON.stringify(user));
    return this.fetch();
  },

  close: function() {
    localStorage.removeItem('user');
    this.set('user', null);
    this.set('info', null);
  },

  isOpen: function() {
    return this.get('user') != null;
  },

  fetch: function() {
    return new Promise((resolve, reject) => {
      let user = this._userFromLocalStorage();
      this.set('user', user);

      if (!user) {
        return reject();
      }
      console.log(JSON.stringify(user));

      this.get('userService').info(user.user_id)
        .then((userDetails) => {
          let fullNameArray = [];
          fullNameArray.push(user.name);

          if (fullNameArray.length === 0) {
            fullNameArray.push(user.email);
          }

          userDetails.fullName = fullNameArray.join(' ');
          userDetails.roles = user.roles;
          this.set('info', userDetails);
          resolve(user);
        })
        .catch(reject);
    });
  },

  _userFromLocalStorage: function() {
    let savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (error) {
        localStorage.removeItem('user');
      }
    }

    return null;
  }
});

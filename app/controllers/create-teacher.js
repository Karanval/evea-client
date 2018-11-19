import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  userService: service('user'),

  actions: {

    makeAdmin: function() {
      var user_id = this.get('user_id');
      console.log("user_id+ "+ user_id);
      
      var payload = {
        user_id: user_id
      };

      return this.get('userService').makeAdmin(payload)
      .then(() => {
        this.transitionToRoute('application');
      })
      .catch((error) => {
        if (error.responseJSON) {
          this.set('message', error.responseJSON.message);
        }
      }).finally(() => {
        this.send('finished');
      });
    }
    
  },
  
  getUsers: computed(function() {
    return this.get('userService').getAll().then(users => {
      return users;
    } );
  })
});

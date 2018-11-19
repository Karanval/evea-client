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

    makeProfessor: function() {
      var user_id = this.get('user_id');
      console.log("user_id+ "+ user_id);
      console.log("email "+this.get('firstName'));

      return this.get('userService').makeProf(user_id)
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

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

    makeProfessor: function(userId) {
      console.log("user_id: "+ userId);

      return this.get('userService').makeProf(userId)
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

import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  classService: service('class'),
  session: service(),

  actions: {
    joinClass: function(classId) {
      let userId = this.get('session')._userFromLocalStorage().user_id;
      let classCode= this.get('classCode');

      let payload = {
        code: classCode
      }
      return this.get('classService').joinClass(classId, userId, payload)
      .then(() => {
        this.transitionToRoute('lista-de-clases');
      })
      .catch((error) => {
        if (error.responseJSON) {
          this.set('message', error.responseJSON.message);
        }
      }).finally(() => {
        this.send('finished');
      });
    },

    see: function(classId) {
      this.transitionToRoute('class', {queryParams: {classId: classId}});
    }
  },
  
  getClasses: computed(function() {
    return this.get('classService').getAll().then(classes => {
      return classes;
    } );
  }),

  getMyClasses: computed(function() {
    let userId = this.get('session')._userFromLocalStorage().user_id;
    return this.get('classService').getMyClasses(userId).then(classes => {
      return classes;
    })
  })
});
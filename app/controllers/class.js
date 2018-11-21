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

  queryParams: ['classId'],

  classId: null,

  getClass: computed(function() {
    return this.get('classService').getClass(this.classId).then(subject => {
      console.log("SUbject: "+JSON.stringify(subject))
      this.set('subject', subject);
    });
  }),

  isProfessor: computed('session.info.roles', function() {
    let roles = this.get('session.info.roles') || [];

    return roles.find((role) => {
      return role === 'professor';
    });
  }),
  
  actions: {
    createHW: function(classId) {
      this.transitionToRoute('crear-tarea', {queryParams: {classId: classId}});
    }
  }
});

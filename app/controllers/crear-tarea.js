import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  classService: service('class'),
  session: service(),

  queryParams: ['classId'],

  classId: null,

  actions: {
    createHW: function() {
      let name = this.get('name');
      let hwInstructions = this.get('hwInstructions');
      let endDate = this.get('endDate');

      let payload = {
        class_id: this.classId,
        description: hwInstructions,
        end: endDate,
        name: name
      }

      return this.get('assignmentService').createAssignment(payload)
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
  }
});

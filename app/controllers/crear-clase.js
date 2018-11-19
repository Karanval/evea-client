import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  classService: service('class'),
  actions: {
    crearClase: function() {
      let className = this.get('className');
      let objectives = this.get('objectives');
      let description = this.get('description');
      let professor = this.get('professor');

      var payload = {
        name: className,
        objectives: objectives,
        description: description,
        professor_name: professor
      };
      console.log("Creating class: "+JSON.stringify(payload));

      return this.get('classService').createClass(payload)
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

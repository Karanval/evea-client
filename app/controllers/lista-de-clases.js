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
    joinClass: function(classId, index) {
      let user = this.get('session').fetch();
      let value = 'classCode'+index;
      let classCode= this.get(value);
      console.log("value "+value);
      console.log("code: "+classCode);
      console.log("USER::: "+JSON.stringify(user));
    }
  },
  
  getClasses: computed(function() {
    return this.get('classService').getAll().then(users => {
      return users;
    } );
  })
});
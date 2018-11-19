import Service from '@ember/service';
import APIServiceMixin from '../mixins/api-service-mixin';

export default Service.extend(APIServiceMixin, {
  init: function() {
    this._super(...arguments);
  },

  getAll: function() {
    console.log("Getting classes");
    return this.getRequest('/v1/classes');
  },

  createClass: function(payload) {
    return this.post('/v1/class', payload);
  },

  joinClass: function(classId, userId) {
    return this.post(`/signup/user/${userId}/class/${classId}`);
  }
});

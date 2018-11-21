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

  getMyClasses: function (userId) {
    return this.getRequest(`/v1/classes/${userId}`);
  },

  createClass: function(payload) {
    return this.post('/v1/class', payload);
  },

  joinClass: function(classId, userId, payload) {
    return this.post(`/v1/signup/user/${userId}/class/${classId}`, payload);
  },
  getClass: function(classId) {
    return this.getRequest(`/v1/class/${classId}`);
  }
});

import Service from '@ember/service';
import APIServiceMixin from '../mixins/api-service-mixin';

export default Service.extend(APIServiceMixin, {
  init: function() {
    this._super(...arguments);
  },

  login: function(payload) {
    return this.post('/v1/auth/login', payload);
  },

  info: function(userId) {
    if (!userId) {
      userId = this.get('session.user.user_id');
    }

    return this.getRequest(`/v1/user/${userId}/session`);
  },

  register: function(payload) {
    return this.post('/v1/user', payload);
  },

  getAll: function() {
    return this.getRequest('/v1/user')
  },

  makeProf: function(id) {
    return this.post(`/v1/makeProf/${id}`);
  }
});

import Service from '@ember/service';
import APIServiceMixin from '../mixins/api-service-mixin';

export default Service.extend(APIServiceMixin, {
  init: function() {
    this._super(...arguments);
  },

  getAll: function() {
    return this.getRequest('/v1/class')
  },

  createClass: function(payload) {
    return this.post('/v1/class', payload);
  }
});

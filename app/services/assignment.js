import Service from '@ember/service';
import APIServiceMixin from '../mixins/api-service-mixin';

export default Service.extend(APIServiceMixin, {
  createAssignment: function(payload) {
    return this.post('/v1/assignment', payload);
  },
});

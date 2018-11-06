import Mixin from '@ember/object/mixin';
import {
  inject as service
} from '@ember/service';

export default Mixin.create({
  session: service(),

  requiredRoles: function() {
    return [];
  },

  beforeModel: function() {
    if (!this.get('session').isOpen()) {
      return Promise.reject({
        status: 'Unauthorized',
        message: 'Porfavor inicie sesión para acceder a la página.'
      });
    } else {
      let roles = this.get('session.info.roles') || [];

      if (this.requiredRoles) {
        let hasPermission = true;
        let requiredRoles = this.requiredRoles() || [];
        requiredRoles.forEach((requiredRole) => {
          let role = roles.find((role) => {
            return role == requiredRole
          });

          if (!role) {
            hasPermission = false;
          }
        });

        if (!hasPermission) {
          return Promise.reject({
            status: 'Forbidden',
            message: 'Usted no tiene autorización para acceder a esta página.'
          });
        }
      }
    }
  },
});

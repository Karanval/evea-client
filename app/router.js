import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('registro_estudiante');
  this.route('registro-docente');
  this.route('registro-estudiantes');
});

export default Router;

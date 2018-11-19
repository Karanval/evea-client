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
  this.route('registro-institucion');
  this.route('registros');
  this.route('lista-de-clases');
  this.route('login');
  this.route('register');
  this.route('create-teacher');
  this.route('crear-clase');
  this.route('crear-tarea');
  this.route('create-teacher');
});

export default Router;

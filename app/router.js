import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('dashboard');
  this.route('crear-clase');
  this.route('crear-tarea');
  this.route('lista-de-clases');
});

export default Router;

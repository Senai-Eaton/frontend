import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('index', { path: '/' })
  this.route('signin', { path: '/cadastre-se' });
  this.route('login', { path: '/login' });
  this.route('home', {path:'/home'});
  this.route('profile', {path:'/perfil'});
  this.route('events', {path: '/evento'});
});

export default Router;

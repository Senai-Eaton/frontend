import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('index', { path: '/' })
  this.route('contact', { path: '/contato' });
  this.route('signin', { path: '/cadastre-se' });
  this.route('about', { path: '/sobre' });
  this.route('login', { path: '/login' });
});

export default Router;

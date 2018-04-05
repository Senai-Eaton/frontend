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
  this.route('profile', {path:'/perfil'}, function() {
    this.route('user', {path: '/usuario/:id'});
    this.route('my', {path: '/meu_perfil'});
  });
  this.route('events', {path: '/eventos'}, function() {
    this.route('description', {path: '/descricao/:id'});
  });
});

export default Router;

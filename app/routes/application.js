import Ember from 'ember';
import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  fb:service(),

  beforeModel() {
    // return this.get('fb').getLoginStatus().then((response) => {
    //   if (response.status === 'connected') {
    //     let fbToken = response.authResponse.accessToken;
    //     this.get('fb').setAccessToken(fbToken);
    //     this.transitionTo('home');
    //   } else {
    //     this.transitionTo('login');
    //   }
    // });
  }
});
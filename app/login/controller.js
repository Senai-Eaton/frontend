import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  fb: Ember.inject.service(),
  actions: {
    onClick() {
      this.get('fb').login('email public_profile').then(function () {
      });
    },
    alerta() {
      alert('Oi')
    },

    login: function (response) {
      console.log("Ctrl action",response)
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }


  }
});


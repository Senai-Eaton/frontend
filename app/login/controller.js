
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  fb: service(),
  session: service('session'),

  actions: {
    authenticate: function () {
      let { email, senha } = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, email, senha);
    },
    onClick() {
      this.get('fb').login('email public_profile').then(() => {
        this.transitionToRoute('home');
      });
    },
  }
});


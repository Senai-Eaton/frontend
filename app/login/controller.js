
import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  fb: service(),
  actions: {
    onClick() {
      this.get('fb').login('email public_profile').then(()=> {
      this.transitionToRoute('home');
      });
    },
    alerta() {
      alert('Oi');
      this.transitionToRoute('home');
    },
  }
});


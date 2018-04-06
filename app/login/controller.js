
import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  fb: service(),
  session: service(),
  
  actions: {
    onClick() {
      this.get('fb').login('email public_profile').then(()=> {
      this.transitionToRoute('home');
      });
    }
  }
  //   authenticate() {
  //     var {identification, password} = this.getProperties('email', 'senha'),
  //       authenticator = 'authenticator:jwt';
  //       console.log(authenticator)
  //     console.log(this.getProperties('email', 'senha'))
  //     this.get('session').authenticate(authenticator, identification, password);
  //   }
  // }
});


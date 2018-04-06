import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
session:service(),

    actions: {
        authenticate() {
            let { email, senha } = this.getProperties('email', 'senha');
            console.log(this.getProperties('email', 'senha'));
            this.get('session').authenticate('authenticator:jwt', email, senha).catch((reason) => {
              this.set('errorMessage', reason.error || reason);
            });
        }
    }
});

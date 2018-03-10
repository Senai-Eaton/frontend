import Route from '@ember/routing/route';
import FBLoginStatus from '../mixins/routes/fb-login-status';

export default Route.extend(FBLoginStatus, {
    fb: Ember.inject.service(),
  
    beforeModel() {
      window.checkLoginState = () => {
        this.checkLoginStatus();
      };
    },
});

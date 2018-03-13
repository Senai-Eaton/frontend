import Route from '@ember/routing/route';
import FBLoginStatus from '../mixins/routes/fb-login-status';
import {inject as service} from '@ember/service'


export default Route.extend(FBLoginStatus, {
    fb:service(),
  
    beforeModel() {
      window.checkLoginState = () => {
        this.checkLoginStatus();
      };
    },
});

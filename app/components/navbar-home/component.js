import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    fb:service(),
    
    actions:{
        logout(){
           this.sendAction("logout");
        }
    }
});

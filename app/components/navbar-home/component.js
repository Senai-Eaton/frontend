import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    fb:service(),
    
    actions:{
        logout(){
            let desconnect = this.get('fb').logout('email public_profile');
            desconnect.then(()=>{
                alert('Deslogado');
               
            })
        }
    }
});

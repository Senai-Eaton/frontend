import Ember from 'ember';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
    fb: service(),
    model() {
        console.log(this.get('fb').api('/me'));
        return Ember.RSVP.hash({
            user: this.get('store').findRecord('user', 1),
            fb: this.get('fb').api('/me')
        });
    },
  actions:{
      sair(){
          this.get('fb').logout('email public_profile').then(()=>{
              alert('Deslogado');
              this.transitionTo('index');
          })
      }
  }

});

import Ember from 'ember';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
    fb: service(),
    model() {
        return Ember.RSVP.hash({
            voluntario: this.get('store').findRecord('voluntario', 1),
            atuacao: this.get('store').findRecord('atuacao', 2),
            fb: this.get('fb').api('/me'),

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

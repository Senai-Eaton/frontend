import Ember from 'ember';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    fb: service(),
    model(params) {
        // console.log(this.get('store').findAll('evento'))
        return Ember.RSVP.hash({
            fb: this.get('fb').api('/me'),
            endereco: this.get('store').findAll('endereco'),
            empresa: this.get('store').findAll('empresa'),
            evento: this.get('store').findAll('evento'),
            // usuario: this.get('store').findRecord('usuario', params.id)
        });
    },




    actions: {
        sair() {
            this.get('fb').logout('email public_profile').then(() => {
                alert('Deslogado');
                this.transitionTo('index');
            })
        }
    }

});

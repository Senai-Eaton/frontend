import Ember from 'ember';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    fb: service(),
    model(params) {
        return Ember.RSVP.hash({
            // user: this.get('store').findRecord('user', 1),
            fb: this.get('fb').api('/me'),
            // empresa: this.get('store').findRecord('empresa', 1),
            empresa: this.get('store').findAll('empresa'),
            // evento: this.get('store').findRecord('evento', params.evento_id)
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

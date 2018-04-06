import Route from '@ember/routing/route';
import Ember from 'ember';
import hash from 'rsvp';
import { inject as service } from '@ember/service';
// import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend({
    fb: service(),

    model(params) {
        return Ember.RSVP.hash({
            fb: this.get('fb').api('/me'),
            empresa: this.get('store').findRecord('empresa', params.id),
            atuacao: this.get('store').findRecord('atuacao', params.id),
            
        });
    }
});

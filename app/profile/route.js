import Route from '@ember/routing/route';
import Ember from 'ember';
import hash from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
    fb: service(),

    model(params) {
        return Ember.RSVP.hash({
            fb: this.get('fb').api('/me'),
            // empresa: this.get('store').queryRecord('empresa', { id: params.empresa_id })

        });
    }
});

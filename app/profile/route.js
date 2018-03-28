import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    fb: service(),
    
    model(params) {
        return Ember.RSVP.hash({
            user: this.get('store').findRecord('user', 1),
            fb: this.get('fb').api('/me')
        });
    }
});

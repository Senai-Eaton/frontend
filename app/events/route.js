import Ember from 'ember';
import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    fb: service(),
    
    model(){
        return Ember.RSVP.hash({
            fb: this.get('fb').api('/me'),
            user:this.get('store').findRecord('user', 1)
        })
    }
});

import Route from '@ember/routing/route';
import Ember from 'ember';
import hash from 'rsvp';

export default Route.extend({
    model() {
        return this.get('store').findRecord('interesse', 9);
    }
});

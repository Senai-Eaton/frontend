import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            user: this.get('store').findRecord('user', 1)
        });
    }
});

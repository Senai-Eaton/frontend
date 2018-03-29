import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return Ember.RSVP.hash({
            endereco: this.get('store').createRecord('endereco'),
            voluntario: this.get('store').createRecord('voluntario')
        });
    }
});

import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return {
            endereco: this.get('store').createRecord('endereco'),
            voluntario: this.get('store').createRecord('voluntario')
        };
    }
});

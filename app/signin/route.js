import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.get('store').createRecord('endereco',{
            logradouro: null,
            numero: null,
            bairro: null,
            cidade: null,
            estado: null
        });
    }
});

import DS from 'ember-data';
// import MF from 'ember-data-model-fragments';

export default DS.Model.extend({
    logradouro: DS.attr('string'),
    numero: DS.attr('number'),
    bairro: DS.attr('string'),
    cidade: DS.attr('string'),
    estado: DS.attr('string'),
    cep: DS.attr('string')
});

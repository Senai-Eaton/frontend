import DS from 'ember-data';

export default DS.Model.extend({
    logradouro: DS.attr('string'),
    numero: DS.attr('number'),
    bairro: DS.attr('string'),
    cidade: DS.attr('string'),
    estado: DS.attr('string')
});

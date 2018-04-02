import DS from 'ember-data';

export default DS.Model.extend({
   nome: DS.attr('string'),
   dataNasc: DS.attr('date'),
   cpf: DS.attr('string'),
   bio: DS.attr('string'),
   endereco: DS.attr('raw')
});

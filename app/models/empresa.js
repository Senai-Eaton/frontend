import DS from 'ember-data';
import MF from 'ember-data-model-fragments';

export default DS.Model.extend({
    nome: DS.attr('string'),
    descricao: DS.attr('string'),
    razaoSocial: DS.attr('string'),
    cnpj: DS.attr('string'),
});

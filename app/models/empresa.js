import DS from 'ember-data';
// import {fragment} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
    nome: DS.attr('string'),
    descricao: DS.attr('string'),
    razaoSocial: DS.attr('string'),
    cnpj: DS.attr('string'),
    areaAtuacao: DS.attr('raw')
});

import DS from 'ember-data';
// import {belongsTo} from 'ember-data/belongsTo'
// import {fragment} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
    nome: DS.attr('string'),
    descricao: DS.attr('string'),
    razaoSocial: DS.attr('string'),
    cnpj: DS.attr('string'),
    areaAtuacao: DS.belongsTo('atuacao'),
    endereco: DS.belongsTo('empresa'),
    usuario: DS.belongsTo('usuario')

});

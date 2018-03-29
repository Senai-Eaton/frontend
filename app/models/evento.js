import DS from 'ember-data';

export default DS.Model.extend({
    nome: DS.attr('string'),
    descricao: DS.attr('string'),
    dataHora: DS.attr('string'),
    endereco: DS.attr('string'),
    voluntarioEvento: DS.attr('string'),
    areaAtuacao: DS.attr('string'),
    areaInteresse: DS.attr('string') 
});

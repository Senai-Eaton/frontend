import DS from 'ember-data';

export default DS.Model.extend({
    nome: DS.attr('string'),
    descricao: DS.attr('string'),
    foto: DS.attr('string'),
    dataHora: DS.attr('string'),
    local: DS.attr('raw')
});

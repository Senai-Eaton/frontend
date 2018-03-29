import DS from 'ember-data';

export default DS.Model.extend({
    razaoSocial: DS.attr('string'),
    nome: DS.attr('string'),
    endereco: DS.attr('string'),
    areaAtuacao: DS.attr('string'),
    email: DS.attr('string'),
    senha: DS.attr('string'),
    cnpj: DS.attr('string'),
    foto: DS.attr('string'),
    token: DS.attr('string')
});

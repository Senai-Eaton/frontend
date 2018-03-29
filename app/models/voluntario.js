import DS from 'ember-data';

export default DS.Model.extend({
    endereco:DS.attr('string'),
    areaInteresse:DS.attr('string'),
    email:DS.attr('string'),
    senha:DS.attr('string'),
    nome:DS.attr('string'),
    cpf:DS.attr('string'),
    profissao:DS.attr('string'),
    foto:DS.attr('string'),
    voluntarioEvento:DS.attr('string'),
    dataNascimento:DS.attr('string')
});

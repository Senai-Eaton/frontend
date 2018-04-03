import DS from 'ember-data';

export default DS.Model.extend({
    email: DS.attr('string'),
    senha: DS.attr('string'),
    foto : DS.attr('string'),
    tipousuario : DS.attr('string'),
    empresa: DS.attr('raw'),
});

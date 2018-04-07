import DS from 'ember-data';

export default DS.Model.extend({
    evento: DS.belongsTo('evento'),
    empresa: DS.belongsTo('empresa',{inverse: null}),
    usuario: DS.belongsTo('usuario'),
});

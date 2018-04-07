import DS from 'ember-data';
import {
    fragment
} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
    nome: DS.attr('string'),
    descricao: DS.attr('string'),
    foto: DS.attr('string'),
    // datahora: DS.attr('date'),
    local: fragment('local'),
    // endereco: DS.attr('raw')
});

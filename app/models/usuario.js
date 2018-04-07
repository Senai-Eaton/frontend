import DS from 'ember-data';
import {
    fragment
} from 'ember-data-model-fragments/attributes';

export default DS.Model.extend({
    email: DS.attr('string'),
    senha: DS.attr('string'),
    Foto: DS.attr('string'),
    TipoUsuario: DS.attr('string'),
    voluntario: fragment('voluntario'),
    // endereco: fragment('endereco'),
});

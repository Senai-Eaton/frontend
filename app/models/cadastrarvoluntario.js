import DS from 'ember-data';
import { fragment } from 'ember-data-model-fragments/attributes';
export default DS.Model.extend({
  
    email: DS.attr('string'),
    senha: DS.attr('string'),
    foto : DS.attr('string'),
    tipoUsuario : DS.attr('string'),
    voluntario: fragment('voluntario'),
});

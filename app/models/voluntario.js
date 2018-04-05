import DS from 'ember-data';
import MF from 'ember-data-model-fragments';
import { fragment } from 'ember-data-model-fragments/attributes';

export default MF.Fragment.extend({
   nome: DS.attr('string'),
   dataNasc: DS.attr('date'),
   cpf: DS.attr('string'),
   bio: DS.attr('string'),
   endereco: fragment('endereco')
});

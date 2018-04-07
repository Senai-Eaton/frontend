import attr from 'ember-data/attr';
import MF from 'ember-data-model-fragments';

export default MF.Fragment.extend({
    logradouro : attr('string'),
    numero : attr('number'),
    bairro : attr('string'),
    cidade : attr('string'),
    estado : attr('string'),
    cep : attr('string')
});

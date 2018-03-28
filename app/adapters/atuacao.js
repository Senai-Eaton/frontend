import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend({
    host: 'https://projeto-agir-senai.herokuapp.com',
    namespace: 'api'
});

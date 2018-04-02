import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'https://projeto-agir-senai.herokuapp.com',
    namespace: 'api',
    queryUrlTemplate: '{+host}/api/atuacaos'
});

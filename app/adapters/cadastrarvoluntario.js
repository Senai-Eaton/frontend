import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';
import {singularize} from 'ember-inflector';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    createUrlTemplate: '{+host}/api/usuario/cadastrarvoluntario',

    pathForType(){
        Inflector.inflector.singularize("usuario/cadastrarvoluntarios");
    }

});

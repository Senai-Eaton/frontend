import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';
import {singularize} from 'ember-inflector';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    urlTemplate: '{+host}/api',
    queryUrlTemplate: '{+host}/api/usuario/cadastrarvoluntario',
    createRecordUrlTemplate: '{+host}/api/usuario/cadastrarvoluntario',

    pathForType(){
        Inflector.inflector.singularize("usuario/cadastrarvoluntarios");
    }

});

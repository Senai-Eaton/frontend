import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';
import Inflector from 'ember-inflector';
import { singularize } from 'ember-inflector';

export default DS.RESTAdapter.extend(urlTemplates, {
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    queryUrlTemplate: '{+host}/api/eventos/listar',
    createRecordUrlTemplate: '{+host}/api/eventos/cadastrar',

    pathForType() {
        Inflector.inflector.singularize("eventos/listars");
        Inflector.inflector.singularize("eventos/cadastrars");
    }
});
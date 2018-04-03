import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';
import Inflector from 'ember-inflector';
import { singularize } from 'ember-inflector';
import $ from 'jquery';

export default DS.RESTAdapter.extend(urlTemplates, {
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    queryUrlTemplate: '{+host}/api/eventos/listar',
    createRecordUrlTemplate: '{+host}/api/eventos/cadastrar',
    
    queryRecord(store, type, query) {
        return $.getJSON('http://corujasdev-001-site4.etempurl.com/api/eventos/listar');
    },

    pathForType() {
        Inflector.inflector.singularize("eventos/listars");
        Inflector.inflector.singularize("eventos/cadastrars");
    }
});
import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    // findAllUrlTemplate: '{+host}/api/usuario/listar',
    queryRecordUrlTemplate: '{+host}/api/usuario/buscaporid{/id}',
    createRecordUrlTemplate: '{+host}/api/usuario/cadastrarempresa',
    createRecordUrlTemplate: '{+host}/api/usuario/cadastrarvoluntario',
});

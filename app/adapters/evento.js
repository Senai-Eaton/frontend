import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates, {
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    findAllUrlTemplate: '{+host}/api/eventos/listar',
    findRecordUrlTemplate: '{+host}/api/eventos/buscarporid{/id}',
    // queryRecordUrlTemplate: '{+host}/api/eventos/participantes{/id}',
    // findRecordUrlTemplate: '{+host}/api/eventos/buscarporareaatuacao{/id}',
    createRecordUrlTemplate: '{+host}/api/eventos/cadastrar',
    deleteRecordUrlTemplate: '{+host}/api/eventos{/id}',
    updateRecordUrlTemplate: '{+host}/api/eventos{/id}',
});

import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    findAllUrlTemplate: '{+host}/api/empresas',
    createRecordUrlTemplate: '{+host}/api/empresas',
    deleteRecordUrlTemplate: '{+host}/api/empresas{/id}',
    queryRecordUrlTemplate: '{+host}/api/empresas{/id}',
    updateRecordUrlTemplate: '{+host}/api/empresas{/id}',
});

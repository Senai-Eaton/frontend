import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    findAllUrlTemplate: '{+host}/api/atuacaos',
    createRecordUrlTemplate: '{+host}/api/atuacaos',
    deleteRecordUrlTemplate: '{+host}/api/atuacaos{/id}',
    queryRecordUrlTemplate: '{+host}/api/atuacaos{/id}',
    updateRecordUrlTemplate: '{+host}/api/atuacaos{/id}',
});

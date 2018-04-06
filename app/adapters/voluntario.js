import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    findAllUrlTemplate: '{+host}/api/voluntarios',
    createRecordUrlTemplate: '{+host}/api/voluntarios',
    deleteRecordUrlTemplate: '{+host}/api/voluntarios{/id}',
    queryRecordUrlTemplate: '{+host}/api/voluntarios{/id}',
    updateRecordUrlTemplate: '{+host}/api/voluntarios{/id}',
});

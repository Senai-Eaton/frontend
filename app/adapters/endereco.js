import DS from 'ember-data';

import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    findAllUrlTemplate: '{+host}/{+namespace}/enderecos',
    createRecordUrlTemplate: '{+host}/{+namespace}/enderecos',
    deleteRecordUrlTemplate: '{+host}/{+namespace}/enderecos{/id}',
    queryRecordUrlTemplate: '{+host}/{+namespace}/enderecos{/id}',
    updateRecordUrlTemplate: '{+host}/{+namespace}/enderecos{/id}',
    
});


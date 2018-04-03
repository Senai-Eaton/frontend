import DS from 'ember-data';

import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend(urlTemplates,{
    host: 'http://corujasdev-001-site4.etempurl.com',
    namespace: 'api',
    createRecordUrlTemplate: '{+host}/{+namespace}/enderecos'
});


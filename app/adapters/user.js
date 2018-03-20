import DS from 'ember-data';
import urlTemplates from 'ember-data-url-templates';

export default DS.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com',
    queryUrlTemplate: '{+host}/home'
});

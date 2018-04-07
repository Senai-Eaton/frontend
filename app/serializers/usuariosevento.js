import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { usuario: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
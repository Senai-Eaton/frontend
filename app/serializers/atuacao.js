import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { atuacaos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});

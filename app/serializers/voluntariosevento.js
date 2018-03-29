import DS from 'ember-data';
export default DS.RESTSerializer.extend({
    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { voluntarioseventos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});

import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { usuarios: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { usuarios: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeIntoHash(hash, typeClass, snapshot, options) {

        Ember.assign(hash, this.serialize(snapshot, options));

        if (hash.usuarios) {
            hash = hash.usuarios;
        }
    },
});
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    modelNameFromPayloadKey: function (payloadKey) {
        if (payloadKey === 'eventos/listar') {
            return this._super(payloadKey.replace('s/listar', ''));
        } else {
            return this._super(payloadKey);
        }
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { evento: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeIntoHash(hash, typeClass, snapshot, options) {

        Ember.assign(hash, this.serialize(snapshot, options));

        if (hash.evento) {
            hash = hash.evento;
        }
    },

    // normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    //     payload = { eventos: payload }
    //     return this._super(store, primaryModelClass, payload, id, requestType);
    // },
    // normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    //     payload = { eventos: payload }
    //     return this._super(store, primaryModelClass, payload, id, requestType);
    // },

});

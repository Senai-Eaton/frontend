import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    modelNameFromPayloadKey: function (payloadKey) {
        if (payloadKey === 'eventos/listar') {
            return this._super(payloadKey.replace('/listar', ''));
        } else {
            return this._super(payloadKey);
        }
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { eventos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
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

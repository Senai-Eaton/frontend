import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { atuacaos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    // normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    //     payload = { atuacaos: payload }
    //     return this._super(store, primaryModelClass, payload, id, requestType);
    // },
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { atuacaos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    // modelNameFromPayloadKey(payloadKey) {
    //     if (payloadKey === 'api/atuacaos') {
    //       return this._super(payloadKey.replace('api/', ''));
    //     } else {
    //      return this._super(payloadKey);
    //     }
    //   }
});

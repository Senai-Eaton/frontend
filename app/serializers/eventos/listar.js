import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {listar: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {listar: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    // normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    //     payload = {listar: payload.listar }
    //     return this._super(store, primaryModelClass, payload, id, requestType);
    // },
    
    modelNameFromPayloadKey: function(payloadKey) {
        if (payloadKey === 'eventos/listar') {
          return this._super(payloadKey.replace('eventos/', ''));
        } else {
         return this._super(payloadKey);
        }
      },
});

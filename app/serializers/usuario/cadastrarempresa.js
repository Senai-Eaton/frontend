import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {eventos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {eventos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    
    modelNameFromPayloadKey: function(payloadKey) {
        if (payloadKey === 'eventos/cadastrarempresa') {
          return this._super(payloadKey.replace('/cadastrarempresa', ''));
        } else {
         return this._super(payloadKey);
        }
      },
});
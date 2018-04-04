import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {eventos: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {eventos: payload.listar }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    
    modelNameFromPayloadKey: function(payloadKey) {
        if (payloadKey === 'eventos/cadastrarcoluntario') {
          return this._super(payloadKey.replace('/cadastrarvoluntario', ''));
        } else {
         return this._super(payloadKey);
        }
      },
      serializeIntoHash(hash, typeClass, snapshot, options) {

        Ember.assign(hash, this.serialize(snapshot, options));

        if (hash.eventos) {
            hash = hash.eventos;
        }
    },
});
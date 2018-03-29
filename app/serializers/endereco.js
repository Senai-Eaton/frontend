import DS from 'ember-data';
import Ember from 'ember'

export default DS.RESTSerializer.extend({
    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        if (payload.enderecos)
            payload = { enderecos: payload.enderecos }
            console.log(payload)
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeIntoHash(hash, typeClass, snapshot, options) {

        Ember.assign(hash, this.serialize(snapshot, options));

        if (hash.endereco) {
            hash = hash.endereco;
        }
    },
});
import DS from 'ember-data';
import Ember from 'ember'

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        
            payload = { enderecos: payload}
           
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    // serializeIntoHash(hash, typeClass, snapshot, options) {

    //     Ember.assign(hash, this.serialize(snapshot, options));

    //     if (hash.endereco) {
    //         hash = hash.endereco;
    //     }
    // },
});
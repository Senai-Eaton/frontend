import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { voluntarios: payload }
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    serializeIntoHash(hash, typeClass, snapshot, options) {

        Ember.assign(hash, this.serialize(snapshot, options));

        if (hash.voluntario) {
            hash = hash.voluntario;
        }
    }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    fb: service(),

    model() {

        let evento = this.get('store').createRecord('evento', {
            nome: null,
            descricao: null,
            foto: null,
            local: {
                logradouro: null,
                numero: null,
                bairro: null,
                cidade: null,
                estado: null,
                cep: null
            }
        })

        return Ember.RSVP.hash({
            evento: evento,
            fb: this.get('fb').api('/me')
        })
    }
});

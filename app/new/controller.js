import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        salvar(evento) {
            return evento.save().then(() => {
                this.transitionToRoute('home');
            });
        }
    }
});

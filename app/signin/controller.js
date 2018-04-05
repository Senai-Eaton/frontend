import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save(model) {
            // let endereco = this.get('model.endereco');
            // console.log(endereco);
            // let voluntario = this.get('model.voluntario');
            model.save().then(() => {
                this.transitionToRoute('login');
            });
        }
    }

});

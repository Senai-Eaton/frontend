import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        signin(newUser) {
            let endereco = this.get('model.endereco');
            console.log(endereco);
            // let voluntario = this.get('model.voluntario');
            newUser.save().then(() => {
                this.transitionToRoute('login');
            });
        }
    }

});

import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        signin(newUser) {
            newUser.save().then(() => {
                alert('Usuário cadastrado com sucesso');
                this.transitionToRoute('login');
            })
        }
    }

});

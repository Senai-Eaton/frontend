import Controller from '@ember/controller';

export default Controller.extend({
actions:{
    signin(newUser){
        
            alert('Usuário cadastrado com sucesso');
            this.transitionToRoute('login');

    }
}

});

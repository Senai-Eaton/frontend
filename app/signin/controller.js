import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        signin(newUser) {
            newUser.save().then(() => {
                this.transitionToRoute('login');
            });
        }
    }

});

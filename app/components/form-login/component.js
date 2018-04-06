import Component from '@ember/component';

export default Component.extend({
    
    user:'teste@teste.com',
    pwd: 'mudar123',
    value:null,
    value2: null,
    
    actions:{
        login(){
            this.get('login')();
        }
    }
});

import Component from '@ember/component';

export default Component.extend({
    
    user:'teste@teste.com',
    pwd: 'mudar123',
    value:null,
    value2: null,
    
    actions:{
        
        authenticate(){
            if(this.user === this.value && this.pwd === this.value2){
               this.get('authenticate')();
            } else{
                alert('Usuário ou senha inválidos');
            }
        }
    }
});

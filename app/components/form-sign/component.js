import Component from '@ember/component';

export default Component.extend({
    actions:{
        cadastrar(){
            console.log(this.getProperties('[data-test-name]'))
            this.get("cadastrar")();
        }
    }
});

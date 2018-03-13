import Component from '@ember/component';

export default Component.extend({
    actions:{
        alertar(){
            this.get('alertar')();
        }
    }
});

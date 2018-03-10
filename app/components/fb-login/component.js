import Component from '@ember/component';

export default Component.extend({
    actions: {
        logar(){
            
            this.sendAction("logar");
        }
    }
});

import Mixin from '@ember/object/mixin';

export default Mixin.create({
    checkLoginStatus() {
        return this.get('fb').getLoginStatus().then((response) => {
          if (response.status === 'connected') {
            this.transitionTo('home');
          } else {
            this.transitionTo('login');
          }
        }).catch(() => {
          this.transitionTo('login');
        });
      }
});

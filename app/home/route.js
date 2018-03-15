import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
    fb: service(),
    model() {
        console.log(this.get('fb').api('/me'))
        return this.get('fb').api('/me');
    }
});

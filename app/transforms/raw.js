import DS from 'ember-data';
import $ from 'jquery';

export default DS.Transform.extend({
  deserialize(value) {
    return !$.isPlainObject(value) ? {} : value;
  },
  serialize(value) {
    return !$.isPlainObject(value) ? {} : value;
  }
});
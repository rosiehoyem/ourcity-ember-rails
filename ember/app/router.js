import Ember from 'ember';

var Router = Ember.Router.extend({
  location: OurcityENV.locationType
});

Router.map(function() {
  this.route('about');
  this.resource('speakers', function() {
    this.route('show', {path: ':speaker_id'});
  });
});

export default Router;


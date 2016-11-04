import Ember from 'ember';

export default Ember.Component.extend({
  favoritePost: Ember.inject.service(),

  actions: {
    addToFavorite(favorite) {
      this.get('favoritePost').add(favorite);
    }
  }
});

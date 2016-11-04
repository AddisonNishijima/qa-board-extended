import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('comment.commenter', 'comment.content', function() {
    return this.get('comment.commenter') + ' - ' + this.get('comment.content');
  }),

  actions: {
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});

import Ember from 'ember';

export function postPopularity(params) {
  var post = params[0];
  if(post.get('comments').get('length') >= 3) {
    return Ember.string.htmlSafe('<span class="glyphicon glypicon-fire"></span>');
  }
}

export default Ember.Helper.helper(postPopularity);

import Ember from 'ember';

export function postPopularity(params) {
  var post = params[0];
  if(post.get('comments').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(postPopularity);

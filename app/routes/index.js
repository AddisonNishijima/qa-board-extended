import Ember from 'ember';

var posts = [{
  id: 1,
  author: "NewtoCode",
  question: "What does HTML stand for?"
}, {
  id: 2,
  author: "CSSNewbie100",
  question: "What does CSS stand for?"
}, {
  id: 3,
  author: "MontyPythonRocks",
  question: "What is the air-speed velocity of an unladen swallow?"
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});

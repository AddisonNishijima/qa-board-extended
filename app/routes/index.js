import Ember from 'ember';

var posts = [{
  id: 1,
  author: "NewtoCode",
  question: "What does HTML stand for?",
  notes: "N/A"
}, {
  id: 2,
  author: "CSSNewbie100",
  question: "What does CSS stand for?",
  notes: "N/A"
}, {
  id: 3,
  author: "MontyPythonRocks",
  question: "What is the air-speed velocity of an unladen swallow?",
  notes: "N/A"
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});

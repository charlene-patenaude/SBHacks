var facts = [
  'quotes', 
  'quote2', 
  'quote3'
] 

function newFact() {
  var randNum = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randNum];
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener('click', newFact, false);
 }, false)

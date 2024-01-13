var facts = [
  'quotes', 
  'quote2'
  ] 
  
function newFact() {
  var randNum = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randNum];

}

var facts = [
  '25% of the bottled water you buy is really municipal tap water, so you might as well pass on the plastic bottle.', 
  'Agriculture uses up 70% of our global freshwater. It goes up to 90% in fast-developing countries.', 
  'The US makes up only 5% of the world population, but it throws away enough plastic bottles in a week to encircle the Earth 5 times!'
  'On average, ONE supermarket goes through 60,500,000 paper bags per year! Bring a reusable bag instead!'
  'A modern glass bottle takes 4000 years or more to decompose.'
  'The U.S. is the #1 trash-producing country in the world at 1,609 pounds per person per year. This means that 5% of the world’s people generate 40% of the world’s waste. We toss out two billion plastic razors, a million and a half tons of paper towels, and 12 billion disposable diapers annually.'
  'The average college student produces 640 pounds of solid waste each year, including 500 disposable cups and 320 pounds of paper.'
  'In the last 170 years, we added 2.4 trillion tons of Carbon Dioxide into our atmosphere. Half of this was added in the last 35 to 50 years.'
  'The five warmest years on record have occurred in the last decade.'
  'Transportation and housing make up about 60% of the carbon footprint of US households. This is due to the fuels used for transportation and to heat, cool and power our homes.'
  'Scientists predict that if the increase in greenhouse gas emissions continues unabated, temperatures will rise by as much as 10 degrees Fahrenheit by the end of this century.'
  'Although greenhouse gas emissions are primarily associated with the burning of fossil fuels (chiefly, coal, oil and natural gas), they come from many sources. As a result, any effort to reduce the human impact on the climate will need to engage all sectors of society.'
  'Most emissions come from a relatively small number of countries. The seven largest emitters—the United States, the European Union (EU), China, Russia, Japan, India, and Canada—accounted for more than 70% of energy-related CO2 emissions in 2004.'
  'As of 2018, the concentration of carbon dioxide (CO2)​​​​​​​ in our atmosphere was 408 part​s per million — the highest it has been in 3 million years.'
  'EDF and Google Earth Outreach teamed up to map air pollution threats on a block-by-block scale in West Oakland, California, to give communities actionable, empowering information that previously not even the government could provide.'
  'Over 6 million people currently live in coastal areas vulnerable to sea-level rise at 1.5°C degrees, and at 2°C, climate change would affect 10 million more people by the end of this century.'
  'Due to uneven distribution patterns, minority and low income communities have far less access to green spaces than white, affluent communities and have limited resources to maintain the green spaces they do have.'
  'In 2015, about 54.4 million people (17.7% of total U.S. population) had low access to a supermarket due to limited transportation and uneven distribution of supermarkets.'
  'Native Americans make only about 1% of the U.S. population and occupy about 4% of the land, but they disproportionately face dislocation and food shortages attributed to climate change.'
  'Children living near freeways have shown to have substantial deficits in lung function, and they develop asthma exacerbations, increased risk of low birth weight, and premature birth.'
  'Recycling one aluminum can save enough energy to run a TV for three hours.'
] 

function newFact() {
  var randNum = Math.floor(Math.random() * (facts.length));
  document.getElementById('factDisplay').innerHTML = facts[randNum];
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button').addEventListener('click', newFact, false);
 }, false)

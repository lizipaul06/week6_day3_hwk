const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map(journey => journey.startLocation);

      return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map(journey => journey.endLocation);
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
   const result = this.journeys.filter(journey => journey.transport === transport)
   return result
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter(journey => journey.distance >= minDistance)
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const results = this.journeys.map(journey => journey.distance)
  let total = results.reduce((travelTime, number) => {
return travelTime + number}, 0);

return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
  const results = this.journeys.map(journey => journey.transport)
   return result = results.filter( onlyUnique);

};


module.exports = Traveller;

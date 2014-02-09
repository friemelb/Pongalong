App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('doubles', {});
  this.resource('double', { path: 'doubles/:double_id' });
  this.resource('singles', {});
  this.resource('single', { path: 'singles/:single_id' });

  this.resource('glyph', {});
});

/*
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue', 'green'];
  }
});
*/

App.DoublesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('double');
  }
});

App.SinglesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('single');
  }
});

// Data
App.ApplicationAdapter = DS.FixtureAdapter.extend();
//App.ApplicationAdapter = DS.RESTAdapter.extend();
var attr = DS.attr;
App.Double = DS.Model.extend({
  number: DS.attr(),
  players: DS.attr()
});

App.Single = DS.Model.extend({
  number: DS.attr(),
  players: DS.attr()
});

  /*
    This is a example data dump of a player 
    id: 200,
    fname: 'Ping',
    lname: 'Pong',
    rank: 1,
    score: [11,11,11,11,11,11]
  */

App.Double.FIXTURES = [
  {
    id: 100,
    number: 1,
    players: ['p1', 'p2', 'p3', 'p4']
  },
  {
    id: 101,
    number: 2,
    players: ['p5', 'p6', 'p7', 'p8']
  }
];

App.Single.FIXTURES = [
  {
    id: 100,
    number: 1,
    players: ['p1', 'p2']
  },
  {
    id: 101,
    number: 2,
    players: ['p3', 'p4']
  },
  {
    id: 102,
    number: 3,
    players: ['p5', 'p6']
  },
  {
    id: 103,
    number: 4,
    players: ['p7', 'p8']
  }
];
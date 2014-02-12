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

App.DoubleController = Ember.ObjectController.extend({
  actions:{
    submitDoublesScore: function(){
      debugger
      //this.get('model');
      console.log('submit doubles score');
    }
  }
});

App.SingleController = Ember.ObjectController.extend({
  actions:{
    submitSinglesScore: function(){
      debugger
      //this.get('model');
      console.log('submit singles score');
    }
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

App.Player = DS.Model.extend({
  fname: DS.attr(),
  lname: DS.attr(),
  rank: DS.attr(),
  scores: []
});

App.Double.FIXTURES = [
  {
    id: 100,
    number: 1,
    players: [
      {    
        id: 200,
        fname: 'Ping',
        lname: 'Pong',
        rank: 1,
        scores: [11,11,11,11,11,11]
      },{    
        id: 201,
        fname: 'Ping',
        lname: 'Pong',
        rank: 1,
        scores: [11,11,11,11,11,11]
      },{    
        id: 202,
        fname: 'Ping',
        lname: 'Pong',
        rank: 1,
        scores: [11,11,11,11,11,11]
      },{    
        id: 203,
        fname: 'Ping',
        lname: 'Pong',
        rank: 1,
        scores: [11,11,11,11,11,11]
      }
    ]
  }
];

App.Single.FIXTURES = [
  {
    id: 101,
    number: 1,
    players: [
      {    
        id: 200,
        fname: 'Ping 1',
        lname: 'Pong 1',
        rank: 1,
        scores: ['','','','','','']
      },{    
        id: 201,
        fname: 'Ping 2',
        lname: 'Pong 2',
        rank: 1,
        scores: ['','','','','','']
      }
    ]
  },
  {
    id: 102,
    number: 2,
    players: [{    
        id: 202,
        fname: 'Ping',
        lname: 'Pong',
        rank: 1,
        scores: ['','','','','','']
      },{    
        id: 203,
        fname: 'Ping',
        lname: 'Pong',
        rank: 1,
        scores: ['','','','','','']
      }]
  }
];
App = Ember.Application.create();
/*

  Sets up the routes

*/
App.Router.map(function() {
  // put your routes here
  this.resource('doubles', {});
  this.resource('double', { path: 'doubles/:double_id' });
  this.resource('singles', {});
  this.resource('single', { path: 'singles/:single_id' });

  //Here just for testing 
  this.resource('glyph', {});
});

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

/*

  Controller and function that submits the data

*/

var submitFunction = function(){
  var model = this.get('model');
  //Steps the rows
  for(var r = 1; r < $('.table tr').length; r++){
    //Steps the columns
    for(var c = 0; c < $($('.table tr')[r]).find('input').length; c++){
      //Updates the model
      var value = $($($('.table tr')[r]).find('input')[c]).val();
      model.get('data').players[r-1].scores[c] = value;
    }
  }
  //Saves the model
  //model.save();

  //proof that model is updated
  console.log(model.get('data').players);
};

App.DoubleController = Ember.ObjectController.extend({
  actions:{
    submitDoublesScore: submitFunction
  }
});

App.SingleController = Ember.ObjectController.extend({
  actions:{
    submitSinglesScore: submitFunction
  }
});

/*

  Created data models 

*/

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

/*

  Created handlebars helper

*/

Handlebars.registerHelper('tableHeaders', function(context, options) {
  var matches = Math.round(context.length / 2);
  var out = "<th>Name</th>";
  for (var i=1; i< matches; i++) {
    out += "<th> Match " + toWords(i) + "</th>";
  }
  out += "</tr>";
  return out;
});

/*

  Mock data

*/

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

/*

  Helper function that converts a number to words

*/

// Convert numbers to words
// copyright 25th July 2006, by Stephen Chapman http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code (including this copyright notice) is
// used exactly as shown (you can change the numbering system if you wish)

// American Numbering System
var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';} return str.replace(/\s+/g,' ');}
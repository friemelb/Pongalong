App=Ember.Application.create();App.Router.map(function(){this.resource("doubles",{});this.resource("double",{path:"doubles/:double_id"});this.resource("singles",{});this.resource("single",{path:"singles/:single_id"});this.resource("glyph",{})});App.DoublesRoute=Ember.Route.extend({model:function(){return this.store.findAll("double")}});App.SinglesRoute=Ember.Route.extend({model:function(){return this.store.findAll("single")}});App.ApplicationAdapter=DS.FixtureAdapter.extend();var attr=DS.attr;App.Double=DS.Model.extend({number:DS.attr(),players:DS.attr()});App.Single=DS.Model.extend({number:DS.attr(),players:DS.attr()});App.Double.FIXTURES=[{id:100,number:1,players:["p1","p2","p3","p4"]},{id:101,number:2,players:["p5","p6","p7","p8"]}];App.Single.FIXTURES=[{id:100,number:1,players:["p1","p2"]},{id:101,number:2,players:["p3","p4"]},{id:102,number:3,players:["p5","p6"]},{id:103,number:4,players:["p7","p8"]}];
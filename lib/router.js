Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  //waitOn: function() {return Meteor.subscribe('allFoo');}
});

Router.map(function() {
  this.route('formData', {path: '/'});
});
Router.map(function() {
  this.route('podkodData', {path: '/podkod'});

});




